import { Dimensions } from 'react-native';

export const screenWidth = Math.round(Dimensions.get('screen').width);
export const screenHeight = Math.round(Dimensions.get('screen').height);

export const scaleSize = (amount, height = false) => ((height ? screenHeight : screenWidth) * amount) / 100;
