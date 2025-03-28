//import liraries
import React, { useState } from "react";
import { View, Text } from "react-native";
import { LoginStyles } from "@/Styles/Styles";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import PasswordWithLabel from "@/components/PasswordWithLabel";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";

// create a component
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const router = useRouter();
  const handlePress = () => {
    router.push("/login");
  };
  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.heading}>Sign in to Wheely</Text>
      <Text style={LoginStyles.paragraph}>
        Log in with your data that you entered during your registration.
      </Text>

      <TextInputWithLabel
        label="Email*"
        value={Email}
        placeholder="andrew_ainsley@yourdomain.com"
        onChange={(value) => setEmail(value)}
        keybtype="email-address"
      />

      <PasswordWithLabel
        label="Password*"
        value={Password}
        placeholder="***************"
        onChange={(value) => setPassword(value)}
        keybtype="email-address"
      />

      <Text style={LoginStyles.forgot}>Forgot password?</Text>
      <PrimaryButton title={"Login"} onSmash={handlePress} />
    </View>
  );
};

//make this component available to the app
export default Login;
