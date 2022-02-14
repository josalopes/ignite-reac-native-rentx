import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import theme from '../../styles/theme';
import {
  Container
} from './styles';


interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({color, ...rest}: Props) {

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={32}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}