import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import { getAccessoryIcon } from '../../utils/getAccesoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';
import {
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Model,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';




interface Params {
  car: CarDTO;
  dates: string[];
}

interface RentPeriod {
  start: string;
  end: string;
}

export function ScheduleDetails() {
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentPeriod>({} as RentPeriod);

  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const diary = Number(car.rent.price);
  const rentTotal = Number(dates.length * diary);

  async function handleConfirmRental() {
    setLoading(true);

    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post('schedules_byuser', {
      user_id: 1,
      car
    });

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then(response => navigation.navigate('ScheduleComplete'))
    .catch(() => {
      Alert.alert('N??o foi poss??vel confirmar o agendamento');
      setLoading(false);
    });
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    });
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {navigation.goBack()}} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Model>{car.name}</Model>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{car.rent.price}</Price>
          </Rent>

        </Details>

        <Accessories>
        {
            car.accessories.map(accessory => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)} />
            ))
          }
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

          <DateInfo>
            <DateTitle>AT??</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x ${dates.length} di??rias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={ theme.colors.success}
          onPress={handleConfirmRental}
          enabled={!loading}
          loading={loading}
        />
      </Footer>

    </Container>
  );
}