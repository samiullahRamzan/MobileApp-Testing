import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const Responsive_w = (value) => {
  return value * width;
};

export const Responsive_h = (value) => {
  return value * height;
};
