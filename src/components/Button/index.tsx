import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

interface Props extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>
}

import {
  ButtonContainer,
  ImageContainer,
  Text
} from './styles';

export function Button({ title, svg: Svg, ...rest }: Props) {
  return (
    <ButtonContainer>
      <ImageContainer>

      </ImageContainer>
      <Text>
        {title}
      </Text>
    </ButtonContainer>
  );
}