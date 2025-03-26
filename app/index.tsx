import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { SplashStyle } from "../Styles/Styles";
import Logo from "@/components/Icons/Logo";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = () => {
  const [fontsLoaded] = useFonts({
    "cabin-bold": require("../assets/fonts/Cabin/static/Cabin_Condensed-Bold.ttf"),
    "cabin-italic": require("../assets/fonts/Cabin/static/Cabin_Condensed-Italic.ttf"),
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
