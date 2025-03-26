import colors from "@/constants/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          statusBarBackgroundColor: colors.primaryColor,
          headerShown: false,
        }}
      />
    </Stack>
  );
}
