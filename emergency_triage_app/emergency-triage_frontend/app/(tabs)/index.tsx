import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { router } from 'expo-router';

import { auth, signInWithEmailAndPassword } from '../../services/firebase';

export default function LoginScreen() {

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleLogin = async () => {

    if (!auth) {
      Alert.alert('Configuration Error', 'Authentication service not available');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/register');
    } catch (error: any) {
      Alert.alert('Login Failed', error?.message ?? String(error));
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🚑</Text>

      <Text style={styles.title}>
        Emergency Triage Assistant
      </Text>

      <Text style={styles.subtitle}>
        AI-powered emergency patient analysis
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          router.push('/signup')
        }
      >
        <Text style={styles.signupText}>
          Create New Account
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    fontSize: 70,
    textAlign: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 10,
  },

  subtitle: {
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 40,
    fontSize: 16,
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#dbeafe',
  },

  button: {
    backgroundColor: '#dc2626',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  signupText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
  },
});