import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { getAccessoryIcon } from '../../utils/getAccesoryIcon';

import { CarDTO } from '../../dtos/CarDTO';

import {
 Details,
 Brand,
 Name,
 Rent,
 About,
 Container,
 Period,
 Price,
 Type,
 CarImage
} from './styles';

interface Props extends RectButtonProps{
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
  <Container {...rest}>
    <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
    </Details>

    <CarImage
      source={{ uri: data.thumbnail }}
      resizeMode="contain"
    />
  </Container>
  );
}
