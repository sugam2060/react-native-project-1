import { Link } from 'expo-router';
import { styled } from "nativewind";
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView)

const Sign_in = () => {
  return (
    <SafeAreaView>
      <Text>Sign_in</Text>
      <Link href={"/(auth)/Sign_up"}>Create account</Link>
    </SafeAreaView>
  )
}

export default Sign_in