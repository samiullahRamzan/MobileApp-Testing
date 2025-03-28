//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "@/constants/colors";
import Lock from "./Icons/Lock";
import EyeSlash from "./Icons/Eye-Slash";
import { size } from "./Responsive";
import Eye from "./Icons/Eye";
// create a component
const PasswordWithLabel = ({
  label,
  placeholder,
  onChange,
  keybtype,
  value,
}) => {
  const [isVisible, setIsVisible] = useState(false);
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
            style={{ backgroundColor: "orange", width: "85%" }}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType={keybtype}
            secureTextEntry={isVisible}
          />
        </View>

        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          {isVisible ? <EyeSlash /> : <Eye />}
        </TouchableOpacity>
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
    // justifyContent: "space-between",
  },
});

//make this component available to the app
export default PasswordWithLabel;
