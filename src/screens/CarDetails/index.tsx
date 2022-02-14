import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccesoryIcon';
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Model,
  Period,
  Price,
  Rent
} from './styles';

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleBack() {
     navigation.goBack();
  }
  function handleSchedule() {
    navigation.navigate('Schedule', { car });
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
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
            <Price>R$ {car.rent.price}</Price>
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

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title="Escolher período de aluguel"
          onPress={handleSchedule}
        />
      </Footer>

    </Container>
  );
}
