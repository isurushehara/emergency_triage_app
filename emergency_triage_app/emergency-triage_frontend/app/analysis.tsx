import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

import API from '../services/api';

export default function AnalysisScreen() {

  const params = useLocalSearchParams();

  const patientData = JSON.parse(
    params.patient as string
  );

  const [loading, setLoading] = useState(true);

  const [result, setResult] = useState('');

  useEffect(() => {
    analyzePatient();
  }, []);

  const analyzePatient = async () => {

    try {

      const response = await API.post(
        '/analysis',
        patientData
      );

      setResult(response.data.result);

    } catch (error: unknown) {
      let errMsg: any;
      if (typeof error === 'object' && error !== null && 'response' in error) {
        errMsg = (error as any).response?.data;
      } else if (error instanceof Error) {
        errMsg = error.message;
      } else {
        errMsg = String(error);
      }

      console.log('ERROR:', errMsg);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>

        <ActivityIndicator size="large" color="#dc2626" />

        <Text style={styles.loadingText}>
          AI is analyzing patient...
        </Text>

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        🤖 AI Emergency Analysis
      </Text>

      <View style={styles.card}>

        <Text style={styles.result}>
          {result}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f7fb',
  },

  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#334155',
  },

  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    padding: 25,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 16,
    elevation: 5,
  },

  result: {
    fontSize: 18,
    color: '#1e293b',
    lineHeight: 30,
  },
});