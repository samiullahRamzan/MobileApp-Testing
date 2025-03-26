import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { SplashStyle } from "../Styles/Styles";

const SplashScreen = () => {
  const [fontsLoaded] = useFonts({
    "cabin-bold": require("../assets/fonts/Cabin/static/Cabin_Condensed-Bold.ttf"),
    "cabin-italic": require("../assets/fonts/Cabin/static/Cabin_Condensed-Italic.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={SplashStyle.container}>
      <Text>sami</Text>
    </View>
  );
};

export default SplashScreen;
