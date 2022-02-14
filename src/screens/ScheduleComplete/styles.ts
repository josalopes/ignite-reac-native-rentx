import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { wp, hp } from '../../utils/dimen';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};

  padding-top: ${hp(16)}px;
  /* padding-top: 96px; */
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  /* padding-bottom: 80px; */
`;

export const Title = styled.Text`
  /* margin-top: 40px; */
  /* margin-top: ${hp(40)}px; */
  margin-bottom: ${hp(16)}px;

  font-family: ${({ theme }) => theme.fonts.secondary_600};
  /* font-size: ${hp(30)}px; */
  font-size: ${RFValue(30)}px;
  color: ${({ theme}) => theme.colors.background_secondary};
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  /* font-size: ${hp(15)}px; */
  color: ${({ theme}) => theme.colors.text_detail};

  /* margin-top: 16px; */
  margin-top: ${hp(16)}px;

  /* line-height: ${hp(25)}px; */
  line-height: ${RFValue(25)}px;
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  /* margin: 80px 0; */
  margin: ${hp(80)}px 0;
`;
