import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { SplashStyle } from "../Styles/Styles";
import Logo from "@/components/Icons/Logo";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = () => {
  const [fontsLoaded] = useFonts({
    "c-bold": require("../assets/fonts/Cabin/static/Cabin_Condensed-Bold.ttf"),
    "c-italic": require("../assets/fonts/Cabin/static/Cabin_Condensed-Italic.ttf"),
    "c-regular": require("../assets/fonts/Cabin/static/Cabin_Condensed-Regular.ttf"),
    "p-bold": require("../assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Bold.ttf"),
    "u-regular": require("../assets/fonts/Urbanist/static/Urbanist-Regular.ttf"),
    "u-medium": require("../assets/fonts/Urbanist/static/Urbanist-Medium.ttf"),
    "u-semiBold": require("../assets/fonts/Urbanist/static/Urbanist-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <SafeAreaView style={SplashStyle.container}>
      <Link href={{ pathname: "/tutorial" }}>
        <Logo />
      </Link>
    </SafeAreaView>
  );
};

export default SplashScreen;
