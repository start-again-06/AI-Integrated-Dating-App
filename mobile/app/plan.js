import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { generatePlan } from '../services/api';
import { getToken } from '../utils/storage';

export default function PlanForm() {
  const [location, setLocation] = useState('');
  const [intent, setIntent] = useState('');
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState('');
  const [result, setResult] = useState(null);

  async function handleGenerate() {
    const token = await getToken();

    const res = await generatePlan(token, {
      location,
      intent,
      budget,
      interests
    });

    setResult(res.plan);
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Location" onChangeText={setLocation} />
      <TextInput placeholder="Intent (Casual / Serious)" onChangeText={setIntent} />
      <TextInput placeholder="Budget (e.g. 500-800)" onChangeText={setBudget} />
      <TextInput placeholder="Interests" onChangeText={setInterests} />

      <Button title="Generate Plan" onPress={handleGenerate} />

      {result && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Suggested Plans</Text>
          {result.plans.map((p, i) => (
            <View key={i} style={{ marginTop: 10, padding: 10, borderWidth: 1 }}>
              <Text>{p.title}</Text>
              <Text>{p.venue}</Text>
              <Text>{p.time}</Text>
              <Text>{p.reason}</Text>
              <Text style={{ color: 'green' }}>{p.safety_note}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
