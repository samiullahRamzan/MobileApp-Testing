//import liraries
import BackButton from "@/components/BackButton";
import { LoginStyles } from "@/Styles/Styles";
import { useRouter } from "expo-router";
import React, { Component, useState, useRef } from "react";
import { View, Text } from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import OTPCode from "@/components/OTPcode";

// create a component
const OTP = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    } else {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePress = () => {
    const combinedOtp = otp.join("");
    console.log("Entered OTP:", combinedOtp);
    router.push("/new_password");
  };

  return (
    <View style={LoginStyles.container}>
      <BackButton router={router} />

      {/* heading */}
      <Text style={{ ...LoginStyles.heading, marginTop: "10%" }}>
        Enter OTP Code
      </Text>
      <Text style={LoginStyles.paragraph}>
        Please enter the one-time password (OTP) you received on your email to
        change your password.
      </Text>

      <View style={{ flexDirection: "row", gap: "2%", marginTop: "4%" }}>
        {[0, 1, 2, 3].map((index) => (
          <OTPCode
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            value={otp[index]}
            onChangeText={(text) => handleChangeText(text, index)}
            focused={index === 0} // Auto-focus first input initially
          />
        ))}
      </View>

      <View style={{ marginTop: "7%", marginBottom: "5%" }}>
        <PrimaryButton title={"Continue"} onSmash={handlePress} />
      </View>
    </View>
  );
};

//make this component available to the app
export default OTP;
