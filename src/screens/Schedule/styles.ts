import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueContainerProps {
  selected?: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;

  padding-top: ${getStatusBarHeight() + 30}px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  padding: 25px;
`;

export const Title = styled.Text`
  width: 220px;
  height: 120px;

  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme}) => theme.colors.shape};

  margin-top: 24px;
  line-height: ${RFValue(34)}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme}) => theme.colors.text};

`;

export const DateValueContainer = styled.View<DateValueContainerProps>`
  ${({ selected, theme }) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.text};
    padding-bottom: 5px;
  `}
`;

export const DateValue = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme}) => theme.colors.shape};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showVertivalScrollIndicator: false
})``;

export const Footer = styled.View`
  padding: 24px;
`;