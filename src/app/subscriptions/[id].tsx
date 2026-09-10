import { useLocalSearchParams } from "expo-router"
import { Text, View } from 'react-native'

const SubscriptionDetails = () => {
 const {id}  = useLocalSearchParams<{id:string}>()
  return (
    <View>
      <Text>subscription details : {id}</Text>
    </View>
  )
}

export default SubscriptionDetails