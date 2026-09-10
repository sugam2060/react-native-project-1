import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Sign_up = () => {
  return (
    <View>
      <Text>Sign_up</Text>
      <Link href={"/(auth)/Sign_in"}>Sign in</Link>
    </View>
  )
}

export default Sign_up