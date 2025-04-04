import { hp, wp } from "@/components/Responsive";
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
    width: wp("90%"),
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
    marginBottom: "4%",
    marginTop: "4%",
    gap: "2%",
  },
  activeDot: {
    width: wp("11%"),
    height: hp("1.5%"),
    borderRadius: 86.71,
    backgroundColor: colors.activeDot,
  },
  inactiveDot: {
    width: wp("4%"),
    height: hp("2%"),
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
  },
  outer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  newToWheely: {
    fontFamily: "u-regular",
    fontSize: size(16),
  },
  login: {
    fontFamily: "u-semiBold",
    color: colors.lightGreen,
  },
});

// define your styles
export const RegisterStyles = StyleSheet.create({
  backbtnView: {
    flexDirection: "row",
    gap: "2%",
    alignItems: "center",
    marginTop: wp("5%"),
  },
  backbtnText: {
    color: colors.lightBlue500,
    fontFamily: "u-regular",
    fontWeight: 500,
    fontSize: size(16),
  },
  TermsOuterView: {
    marginTop: "7%",
    flexDirection: "row",
    gap: "2%",
    alignItems: "center",
  },
  TermsText: {
    fontSize: size(13),
    fontWeight: 400,
    fontFamily: "u-regular",
  },
  notchecked: {
    width: wp("4%"),
    height: hp("2%"),
    borderRadius: 5,
    borderWidth: 1,
  },
});

// define your styles
export const SuccessStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
  },
  outer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  heading: {
    fontSize: size(20),
    color: "white",
    fontFamily: "u-bold",
    fontWeight: 600,
    marginBottom: "1%",
  },
  p: {
    color: "white",
    fontFamily: "u-regular",
    fontWeight: 400,
    fontSize: size(18),
    textAlign: "center",
  },
});
