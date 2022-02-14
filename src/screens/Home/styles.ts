import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { CarDTO } from '../../dtos/CarDTO';
import { wp, hp } from '../../utils/dimen';

export const Container = styled.View`
 flex: 1;

 background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${hp(113)}px;
  /* height: 113px; */

  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
  padding: ${hp(32)}px ${wp(24)}px;
  /* padding: 32px 24px; */
  `;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme}) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})`
`;

export const MyCarsButton = styled(RectButton)`
  width: 60px;
  height: 60px;

  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.main};

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: ${hp(13)}px;
  right: ${wp(22)}px;
`;
