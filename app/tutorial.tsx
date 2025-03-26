import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  Animated,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import Logo from "@/components/Icons/Logo";
import colors from "@/constants/colors";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const Tutorial = () => {
  const contentPosition = useRef(new Animated.Value(0)).current;
  const modalHeight = SCREEN_HEIGHT * 0.44;

  useEffect(() => {
    // Animate content up when component mounts
    Animated.timing(contentPosition, {
      toValue: -modalHeight, // Adjust this value based on how much you want to move up
      duration: 1000, // Matches default modal slide duration
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: contentPosition }] }}>
        <Logo />
      </Animated.View>

      <Modal animationType="fade" transparent visible>
        <View style={styles.modalContainer}>
          <Text>sami</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
  },
});

export default Tutorial;
