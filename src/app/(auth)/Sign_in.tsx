import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Sign_in = () => {
  return (
    <View>
      <Text>Sign_in</Text>
      <Link href={"/(auth)/Sign_up"}>Create account</Link>
    </View>
  )
}

export default Sign_in