//import liraries
import colors from "@/constants/colors";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue as size } from "react-native-responsive-fontsize";

// create a component
const PrimaryButton = ({ title, onSmash }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSmash}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
    paddingVertical: "5%",
    borderRadius: 86.71,
  },
  title: {
    color: "white",
    fontSize: size(13.87),
    fontWeight: 700,
    fontFamily: "u-regular",
  },
});

//make this component available to the app
export default PrimaryButton;
