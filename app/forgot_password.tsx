//import liraries
import BackButton from "@/components/BackButton";
import { LoginStyles } from "@/Styles/Styles";
import { useRouter } from "expo-router";
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import PrimaryButton from "@/components/PrimaryButton";

// create a component
const ForgotPassword = () => {
  const [Email, setEmail] = useState();
  const router = useRouter();

  const handlePress = () => {
    router.push("/otp");
  };
  return (
    <View style={LoginStyles.container}>
      <BackButton router={router} />

      {/* heading */}
      <Text style={{ ...LoginStyles.heading, marginTop: "10%" }}>
        Forgot Password
      </Text>
      <Text style={LoginStyles.paragraph}>
        Enter the email address associated with your account and we'll send you
        a link to reset your password
      </Text>

      <TextInputWithLabel
        label="Email*"
        value={Email}
        placeholder="andrew_ainsley@yourdomain.com"
        onChange={(value) => setEmail(value)}
        keybtype="email-address"
      />

      <View style={{ marginTop: "7%", marginBottom: "5%" }}>
        <PrimaryButton title={"Login"} onSmash={handlePress} />
      </View>
    </View>
  );
};

//make this component available to the app
export default ForgotPassword;
