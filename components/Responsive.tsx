import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

export const size = (value: number) => {
  return RFValue(value);
};
export const wp = (value: string) => {
  return widthPercentageToDP(value);
};
export const hp = (value: string) => {
  return heightPercentageToDP(value);
};
