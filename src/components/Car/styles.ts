import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 /* flex: 1; */

 flex-direction: row;
 justify-content: space-between;

 padding: 17px 24px;
 margin-bottom: 16px;

 width: 100%;
 /* width: 343px; */
 height: 126px;
 background-color: ${({ theme}) => theme.colors.background_secondary};
 `;

export const Details = styled.View`
/* background-color: red; */
/* justify-content: space-between; */
`;

export const CarTitleContainer = styled.View`
  /* background-color: green; */
  
  `;


export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme}) => theme.colors.text_detail};

  text-transform: uppercase;
  `;

export const Name = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme}) => theme.colors.title};
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme}) => theme.colors.text_detail};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme}) => theme.colors.main};
  `;

  export const Type = styled.View`
  
  `;

  export const CarImage = styled.Image`
    width: 187px;
    height: 85px;

  `;

