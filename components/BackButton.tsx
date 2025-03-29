//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AngleLeft from "react-native-vector-icons/FontAwesome";
import { RegisterStyles } from "@/Styles/Styles";
import colors from "@/constants/colors";
import { wp } from "./Responsive";

// create a component
const BackButton = ({ router }) => {
  const handlePress = () => {
    router.back();
  };
  return (
    <TouchableOpacity style={RegisterStyles.backbtnView} onPress={handlePress}>
      <AngleLeft
        name="angle-left"
        size={wp("7%")}
        style={{ color: colors.lightBlue500 }}
      />
      <Text style={RegisterStyles.backbtnText}>Back</Text>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default BackButton;
