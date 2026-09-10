import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "san-regular": require("@/assets/fonts/PlusJakartaSans-Regular.ttf"),
    "san-bold": require("@/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "san-semibold": require("@/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "san-light": require("@/assets/fonts/PlusJakartaSans-Light.ttf"),
    "san-extrabold": require("@/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "san-medium": require("@/assets/fonts/PlusJakartaSans-Medium.ttf"),
  })

  useEffect(() => {
    if (fontsLoaded){
      SplashScreen.hideAsync()
    }
  },[fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)"  />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="subscriptions/[id]" />
    </Stack>
  );
}