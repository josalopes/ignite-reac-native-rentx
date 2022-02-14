import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { wp, hp } from '../../utils/dimen';
interface ButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  height: ${hp(56)}px;
  /* height: ${RFValue(56)}px; */

  background-color: ${({ theme, color }) => color ? color : theme.colors.main};

  align-items: center;
  padding: ${hp(18)}px ${wp(64)}px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${hp(14)}px;
  /* font-size: ${RFValue(14)}px; */
  color: ${({ theme }) => theme.colors.background_secondary};
`;
