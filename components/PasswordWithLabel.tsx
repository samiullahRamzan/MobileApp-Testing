//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "@/constants/colors";
import Lock from "./Icons/Lock";
import EyeSlash from "./Icons/Eye-Slash";
import { size } from "./Responsive";
// create a component
const PasswordWithLabel = ({
  label,
  placeholder,
  onChange,
  keybtype,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.input}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: "2%",
          }}
        >
          <Lock />
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType={keybtype}
            secureTextEntry={true}
          />
        </View>
        <EyeSlash />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: "3%",
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
    paddingHorizontal: "3%",
    backgroundColor: colors.input_bgColor,
    justifyContent: "space-between",
  },
});

//make this component available to the app
export default PasswordWithLabel;
