import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { router } from 'expo-router';

export default function RegisterPatientScreen() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [oxygen, setOxygen] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const handleAnalyze = () => {

    const patientData = {
      name,
      age,
      symptoms,
      oxygen,
      heartRate,
    };

    router.push({
      pathname: '/analysis',
      params: {
        patient: JSON.stringify(patientData),
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>
        🏥 Patient Registration
      </Text>

      <TextInput
        placeholder="Patient Name"
        placeholderTextColor="#888"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Age"
        placeholderTextColor="#888"
        keyboardType="numeric"
        style={styles.input}
        value={age}
        onChangeText={setAge}
      />

      <TextInput
        placeholder="Symptoms"
        placeholderTextColor="#888"
        style={styles.input}
        value={symptoms}
        onChangeText={setSymptoms}
      />

      <TextInput
        placeholder="Oxygen Level"
        placeholderTextColor="#888"
        keyboardType="numeric"
        style={styles.input}
        value={oxygen}
        onChangeText={setOxygen}
      />

      <TextInput
        placeholder="Heart Rate"
        placeholderTextColor="#888"
        keyboardType="numeric"
        style={styles.input}
        value={heartRate}
        onChangeText={setHeartRate}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAnalyze}
      >
        <Text style={styles.buttonText}>
          Analyze Patient
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#f4f7fb',
    padding: 25,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#dbeafe',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#dc2626',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});