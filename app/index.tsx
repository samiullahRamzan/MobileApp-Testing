import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashStyle } from "../Styles/Styles";
import Logo from "@/components/Icons/Logo";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import fonts from "@/constants/fonts";

const SplashScreen = () => {
  const [fontsLoaded] = useFonts(fonts);
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
