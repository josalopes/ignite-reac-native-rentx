import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp
} from 'react-native-responsive-screen';

const widthScale = 375;
const heightScale = 812;

export const wp = (dimension: number) => {
  return wp2dp((dimension / widthScale) * 100 + '%');
}

export const hp = (dimension: number) => {
  return hp2dp((dimension / heightScale) * 100 + '%');
}