import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";

const SplashScreen = () => {
  const [fontsLoaded] = useFonts({
    "cabin-bold": require("../assets/fonts/Cabin/static/Cabin_Condensed-Bold.ttf"),
    "cabin-italic": require("../assets/fonts/Cabin/static/Cabin_Condensed-Italic.ttf"),
  
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SplashScreen 1</Text>
      <Text style={styles.text1}>SplashScreen 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'cabin-bold',
    fontSize: 24,
  },
  text1: {
    fontFamily: 'cabin-italic',
    fontSize: 24,
  }
});

export default SplashScreen;