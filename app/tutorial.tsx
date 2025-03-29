import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  Animated,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import Logo from "@/components/Icons/Logo";
import { TutoialStyles } from "@/Styles/Styles";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "expo-router";
import { wp } from "@/components/Responsive";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const modalHeight = SCREEN_HEIGHT * 0.44;

// content array
const content = [
  {
    id: 0,
    heading: "Get Instant Help for Your Flat Tyre",
    paragraph:
      "Flat tyre? No worries! Just a few taps to call a pro for quick, reliable service, right when you need it!",
  },
  {
    id: 1,
    heading: "Schedule Your Bike Tuning with Ease",
    paragraph:
      "Keep your bike in top shape! Easily schedule tuning through our app—just pick a time, and we’ll handle the rest.",
  },
  {
    id: 2,
    heading: "Track Your Service in Real Time",
    paragraph:
      "Track your expert's arrival in real time with updates at every step for a smooth, stress-free experience.",
  },
];

const Tutorial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentPosition = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  const scrollViewRef = useRef(null);
  const handleNextPress = () => {
    if (currentIndex < content.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);

      // Scroll to the next item
      scrollViewRef.current?.scrollTo({
        x: wp("90%") * newIndex,
        animated: true,
      });
    } else {
      router.push("/login");
    }
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const viewWidth = wp("90%");
    const currentIndex = Math.round(contentOffsetX / viewWidth);
    setCurrentIndex(currentIndex);
  };

  useEffect(() => {
    Animated.timing(contentPosition, {
      toValue: -modalHeight,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={TutoialStyles.container}>
      {/* Logo */}
      <Animated.View style={{ transform: [{ translateY: contentPosition }] }}>
        <Logo />
      </Animated.View>

      {/* Modal for displaying content */}
      <Modal animationType="slide" transparent visible>
        <View style={TutoialStyles.modalContainer}>
          <View
            style={{
              width: wp("90%"),
            }}
          >
            <ScrollView
              pagingEnabled
              horizontal
              onScroll={handleScroll}
              ref={scrollViewRef}
            >
              {content.map((item, index) => (
                <View key={index} style={TutoialStyles.outerView}>
                  <Text style={TutoialStyles.heading}>{item.heading}</Text>
                  <Text style={TutoialStyles.paragraph}>{item.paragraph}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={TutoialStyles.dotContainer}>
            {content.map((_, index) => (
              <View
                key={index}
                style={
                  currentIndex === index
                    ? TutoialStyles.activeDot
                    : TutoialStyles.inactiveDot
                }
              ></View>
            ))}
          </View>

          <PrimaryButton title={"Next"} onSmash={handleNextPress} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Tutorial;
