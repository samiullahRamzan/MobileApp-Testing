import colors from "@/constants/colors";
import { StyleSheet } from "react-native";

export const SplashStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
  },
  text: {
    fontFamily: "cabin-bold",
    fontSize: 24,
  },
  text1: {
    fontFamily: "cabin-italic",
    fontSize: 24,
  },
});

// define your styles
export const TutorialStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondaryColor,
  },
});
