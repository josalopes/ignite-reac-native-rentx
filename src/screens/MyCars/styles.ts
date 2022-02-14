import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 273px;

  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 24px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.background_secondary};

  margin-top: 24px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;

  padding: 16px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AppointmentsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const AppointmentsQuantity = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const CarList = styled(FlatList as new () => FlatList<CarProps>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})``;

export const CarWrapper = styled.View`
  width: 100%;
`;

export const CarFooter = styled.View`
  width: 100%;
  /* height: 40px; */
  margin-top: -14px;
  margin-bottom: 16px;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const CarFooterTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
`;
