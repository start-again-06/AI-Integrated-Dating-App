import { View, Text, Button } from 'react-native';
import { removeToken } from '../utils/storage';

export default function Home({ navigation }) {
  async function logout() {
    await removeToken();
    navigation.replace('Login');
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Welcome
      </Text>

      <Button
        title="Plan a Date"
        onPress={() => navigation.navigate('Plan')}
      />

      <View style={{ height: 10 }} />

      <Button
        title="View History"
        onPress={() => navigation.navigate('History')}
      />

      <View style={{ height: 30 }} />

      <Button
        title="Logout"
        color="red"
        onPress={logout}
      />
    </View>
  );
}
