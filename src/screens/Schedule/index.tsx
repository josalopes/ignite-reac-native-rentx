import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import ArrowSvg from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps
} from '../../components/Calendar';
import { CarDTO } from '../../dtos/CarDTO';
import { getPlatformDate } from '../../utils/getPlatformDate';
import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  DateValueContainer,
  Footer,
  Header,
  RentalPeriod, Title
} from './styles';



interface RentalPeriod {
  start: number,
  end: number,
  startFormatted: string,
  endFormatted: string
}

interface Params {
  car: CarDTO;
}

interface RentalProps {
  start: number;
  startFormatted: string
  end: number;
  endFormatted: string
}

export function Schedule() {
  const route = useRoute();
  const { car } = route.params as Params;

  const theme = useTheme();
  const navigation = useNavigation<any>();

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);


  function handleConfirmRental() {
    navigation.navigate('ScheduleDetails', {
      car,
      dates: Object.keys(markedDates),
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      let aux = start;
      start = end;
      end = aux;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      // startFormatted: format(parseISO(firstDate.dateString),
      // endFormatted: format(parseISO(firstDate.dateString),
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyy'),
      endFormatted: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyy'),
    })
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton
          color={theme.colors.shape}
          onPress={handleBack}
        />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer selected={!!rentalPeriod.startFormatted}>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateValueContainer>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={!!rentalPeriod.endFormatted}>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button
          title="Confirmar" color="red"
          onPress={handleConfirmRental}
          enabled={!!rentalPeriod.endFormatted}
        />
      </Footer>
    </Container>
  );
}