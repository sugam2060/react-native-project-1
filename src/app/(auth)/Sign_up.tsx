import { Link } from 'expo-router';
import { styled } from "nativewind";
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView)

const Sign_up = () => {
  return (
    <SafeAreaView>
      <Text>Sign_up</Text>
      <Link href={"/(auth)/Sign_in"}>Sign in</Link>
    </SafeAreaView>
  )
}

export default Sign_up