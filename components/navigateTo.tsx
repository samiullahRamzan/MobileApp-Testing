//import liraries
import React from "react";
import { View, Text } from "react-native";
import { LoginStyles } from "@/Styles/Styles";
import { Link } from "expo-router";

// create a component
const NavigateTo = ({ href, navigationName, label }) => {
  return (
    <View style={LoginStyles.outer}>
      <Text style={LoginStyles.newToWheely}>{label}</Text>
      <Link href={href}>
        <Text style={LoginStyles.login}>{navigationName}</Text>
      </Link>
    </View>
  );
};

//make this component available to the app
export default NavigateTo;
