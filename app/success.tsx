//import liraries
import ProfileSuccess from "@/components/Icons/ProfileSuccess";
import PrimaryButton from "@/components/PrimaryButton";
import { hp, wp } from "@/components/Responsive";
import colors from "@/constants/colors";
import { SuccessStyle } from "@/Styles/Styles";
import { useRouter } from "expo-router";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Success = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/");
  };
  return (
    <View style={SuccessStyle.container}>
      <ProfileSuccess width={wp("30%")} height={hp("15%")} />

      <View style={SuccessStyle.outer}>
        <Text style={SuccessStyle.heading}>Account Created Successfully </Text>
        <Text style={SuccessStyle.p}>
          Your profile has been created please enter your credentials to login
        </Text>
      </View>

      <View style={{ marginTop: "7%" }}>
        <PrimaryButton
          title={"Let's Start"}
          onSmash={handlePress}
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
