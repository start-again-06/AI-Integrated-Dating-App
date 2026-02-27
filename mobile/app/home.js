import { View, Text, Button } from 'react-native';
import { getToken } from '../utils/storage';

export default function Home() {
  async function checkToken() {
    const token = await getToken();
    console.log('JWT:', token);
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome </Text>
      <Button title="Check Token" onPress={checkToken} />
    </View>
  );
}
