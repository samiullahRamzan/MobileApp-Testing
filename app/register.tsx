import BackButton from "@/components/BackButton";
import NavigateTo from "@/components/navigateTo";
import PasswordWithLabel from "@/components/PasswordWithLabel";
import PrimaryButton from "@/components/PrimaryButton";
import { size, wp } from "@/components/Responsive";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import colors from "@/constants/colors";
import { LoginStyles, RegisterStyles } from "@/Styles/Styles";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Touchable,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SquareCheck from "react-native-vector-icons/FontAwesome";

// create a component
const Register = () => {
  const [FullName, setFullName] = useState();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  console.log("here is password value", Password);

  const router = useRouter();

  const handlePress = () => {
    router.push("/success");
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView
        style={{ ...LoginStyles.container, paddingHorizontal: wp("4%") }}
      >
        {/* backbutton */}
        <BackButton router={router} />

        {/* heading */}
        <Text style={{ ...LoginStyles.heading, marginTop: "10%" }}>
          Create Account
        </Text>
        <Text style={LoginStyles.paragraph}>
          Get the most out of your stay with a personalized experience by
          signing up today.
        </Text>

        {/* Full Name */}
        <TextInputWithLabel
          label="Andrew*"
          value={FullName}
          placeholder="andrew_ainsley@yourdomain.com"
          onChange={(value) => setFullName(value)}
          keybtype="email-address"
        />

        <TextInputWithLabel
          label="Email*"
          value={Email}
          placeholder="andrew_ainsley@yourdomain.com"
          onChange={(value) => setEmail(value)}
          keybtype="email-address"
          containerStyle={{ marginTop: "3%" }}
        />

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

        <View style={RegisterStyles.TermsOuterView}>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
            {isChecked ? (
              <SquareCheck
                name="check-square"
                size={wp("4.7%")}
                style={{ color: colors.lightGreen }}
              />
            ) : (
              <View style={RegisterStyles.notchecked}></View>
            )}
          </TouchableOpacity>
          <Text style={RegisterStyles.TermsText}>
            Accept to
            <Link href={"/"}>
              <Text style={{ color: colors.lightBlue500 }}>
                {" "}
                Privacy Policy{" "}
              </Text>
            </Link>
            and
            <Link href={"/"}>
              <Text style={{ color: colors.lightBlue500 }}>
                Terms & conditions
              </Text>
            </Link>
          </Text>
        </View>

        <View style={{ marginTop: "7%", marginBottom: "5%" }}>
          <PrimaryButton title={"Register"} onSmash={handlePress} />
        </View>

        <NavigateTo
          href={"/login"}
          navigationName="Login"
          label="Already have an account?"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

//make this component available to the app
export default Register;
