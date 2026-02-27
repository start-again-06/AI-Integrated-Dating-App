import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getHistory } from '../services/api';
import { getToken } from '../utils/storage';

export default function History() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function load() {
      const token = await getToken();
      const res = await getHistory(token);
      setPlans(res.plans);
    }
    load();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Your Past Plans</Text>

      {plans.map((p) => (
        <View key={p.id} style={{ marginTop: 10, borderWidth: 1, padding: 10 }}>
          <Text>Accepted: {p.accepted ? 'Yes' : 'No'}</Text>
          <Text>{JSON.stringify(p.planJson)}</Text>
        </View>
      ))}
    </View>
  );
}
