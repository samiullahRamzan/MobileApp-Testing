//import liraries
import BackButton from "@/components/BackButton";
import PasswordWithLabel from "@/components/PasswordWithLabel";
import PrimaryButton from "@/components/PrimaryButton";
import { LoginStyles } from "@/Styles/Styles";
import { useRouter } from "expo-router";
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const NewPassword = () => {
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handlePress = () => {
    console.log("here is handle press");
    router.push({
      pathname: "/success",
      params: {
        screenName: "new_password",
      },
    });
  };
  return (
    <View style={LoginStyles.container}>
      <BackButton router={router} />

      {/* heading */}
      <Text style={{ ...LoginStyles.heading, marginTop: "10%" }}>
        Set New Password
      </Text>
      <Text style={LoginStyles.paragraph}>
        Your new password must be different from previously used passwords.
      </Text>

      <PasswordWithLabel
        label="Password*"
        value={Password}
        placeholder="***************"
        onChange={(value) => setPassword(value)}
        keybtype="email-address"
      />

      <PasswordWithLabel
        label="Confirm Password*"
        value={ConfirmPassword}
        placeholder="***************"
        onChange={(value) => setConfirmPassword(value)}
        keybtype="email-address"
      />

      <View style={{ marginTop: "7%" }}>
        <PrimaryButton title={"Continue"} onSmash={handlePress} />
      </View>
    </View>
  );
};

//make this component available to the app
export default NewPassword;
