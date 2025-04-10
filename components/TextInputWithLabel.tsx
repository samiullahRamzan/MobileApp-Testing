//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { RFValue as size } from "react-native-responsive-fontsize";
import Email from "./Icons/Email";
import colors from "@/constants/colors";
import { wp } from "./Responsive";
import Profile from "./Icons/Profile";

// create a component
const TextInputWithLabel = ({
  label,
  placeholder,
  onChange,
  keybtype,
  value,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.input}>
        {label === "Full Name*" ? <Profile /> : <Email />}
        <TextInput
          style={{ width: wp("75%") }}
          placeholder={placeholder}
          onChangeText={onChange}
          keyboardType={keybtype}
          value={value}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: "7%",
  },
  text: {
    fontFamily: "u-bold",
    fontWeight: 400,
    fontSize: size(14),
    marginBottom: "1%",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    borderColor: colors.input_borderColor,
    borderWidth: 2,
    gap: "2%",
    paddingHorizontal: "3%",
    backgroundColor: colors.input_bgColor,
  },
});

//make this component available to the app
export default TextInputWithLabel;
