import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

import {
  Container,
  Title
} from './styles';

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: (enabled === false || loading) ? 0.5 : 1 }}
    >
      {
        loading ? <ActivityIndicator color={theme.colors.shape} />
        : <Title>{title}</Title>
      }
    </Container>
  );
}