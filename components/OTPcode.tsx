// Import libraries
import React, { forwardRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { hp, size, wp } from "./Responsive";
import colors from "@/constants/colors";
// Create a component with forwardRef
const OTPCode = forwardRef(({ value, onChangeText }, ref) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{ fontSize: size(20), color: "black" }}
        placeholder=""
        placeholderTextColor={"grey"}
        value={value}
        cursorColor={"grey"}
        keyboardType="number-pad"
        maxLength={1} // Restrict input to one digit
        onChangeText={onChangeText}
        ref={ref} // Attach the ref to the TextInput
      />
    </View>
  );
});

// Define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey100,
    alignItems: "center",
    justifyContent: "center",
    width: wp("20%"),
    height: hp("10%"),
    borderRadius: "50%",
    // borderWidth: 0.5,
  },
});

// Export the component
export default OTPCode; // Use memoization to optimize rendering
