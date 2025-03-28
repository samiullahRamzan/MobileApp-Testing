import {
  Responsive_h,
  Responsive_w,
} from "@/components/ResponsiveWidth_height";
import colors from "@/constants/colors";
import { StyleSheet } from "react-native";
import { RFValue as size } from "react-native-responsive-fontsize";

export const SplashStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
  },
});

export const TutoialStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: "3%",
    paddingVertical: "3%",
  },
  outerView: {
    width: Responsive_w(0.9),
    alignItems: "center",
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "p-bold",
    fontWeight: 600,
    fontSize: size(28),
    textAlign: "center",
    marginBottom: "2%",
  },
  paragraph: {
    fontFamily: "c-regular",
    fontWeight: 400,
    fontSize: size(18),
    textAlign: "center",
    marginBottom: "2%",
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2%",
    gap: "2%",
  },
  activeDot: {
    width: Responsive_w(0.11),
    height: Responsive_h(0.015),
    borderRadius: 86.71,
    backgroundColor: colors.activeDot,
  },
  inactiveDot: {
    width: Responsive_w(0.04),
    height: Responsive_h(0.02),
    borderRadius: 86.71,
    backgroundColor: colors.inactiveDot,
  },
});

// define your styles
export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: "4%",
  },
  heading: {
    marginTop: "15%",
    fontFamily: "p-bold",
    fontWeight: 700,
    fontSize: size(24),
  },
  paragraph: {
    fontFamily: "u-medium",
    fontWeight: 500,
    fontSize: 14,
    marginTop: "2%",
  },
  forgot: {
    fontFamily: "u-semiBold",
    fontWeight: 600,
    fontSize: size(14),
    color: colors.lightBlue,
    marginTop: "3%",
    alignSelf: "flex-end",
  },
});
