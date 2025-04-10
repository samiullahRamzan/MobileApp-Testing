//import liraries
import colors from "@/constants/colors";
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { size } from "./Responsive";

// create a component
const PrimaryButton = ({
  title,
  onSmash,
  buttonStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onSmash}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
    paddingVertical: "4%",
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
