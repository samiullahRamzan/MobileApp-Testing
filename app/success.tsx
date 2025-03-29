//import liraries
import ProfileSuccess from "@/components/Icons/ProfileSuccess";
import SuccessSVG from "@/components/Icons/Success";
import PrimaryButton from "@/components/PrimaryButton";
import { hp, size, wp } from "@/components/Responsive";
import colors from "@/constants/colors";
import { SuccessStyle } from "@/Styles/Styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const SUCCESS_TYPES = {
  PASSWORD_RESET: {
    icon: SuccessSVG,
    message: "Your password has been updated successfully!",
    btnTitle: "Login",
    navigateTo: "/login",
  },
  ACCOUNT_CREATION: {
    icon: ProfileSuccess,
    heading: "Account Created Successfully",
    message:
      "Your profile has been created please enter your credentials to login",
    btnTitle: "Let's Start",
    navigateTo: "/",
  },
  // Add more types as needed
};

const Success = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  // Determine success type (default to account creation)
  const successType =
    params.screenName === "new_password"
      ? SUCCESS_TYPES.PASSWORD_RESET
      : SUCCESS_TYPES.ACCOUNT_CREATION;

  const IconComponent = successType.icon;

  return (
    <View style={SuccessStyle.container}>
      <IconComponent width={wp("24%")} height={hp("12%")} />

      <View style={SuccessStyle.outer}>
        {successType?.heading && (
          <Text style={SuccessStyle.heading}>{successType.heading}</Text>
        )}
        <Text
          style={[
            SuccessStyle.p,
            params.screenName !== "new_password" && { fontSize: size(14) },
          ]}
        >
          {successType.message}
        </Text>
      </View>

      <View style={{ marginTop: "7%" }}>
        <PrimaryButton
          title={successType.btnTitle}
          onSmash={() => router.push(successType.navigateTo)}
          buttonStyle={{
            backgroundColor: "white", // Custom background
            width: wp("86%"), // Custom width
          }}
          textStyle={{
            color: colors.primaryColor, // Custom text color
          }}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default Success;
