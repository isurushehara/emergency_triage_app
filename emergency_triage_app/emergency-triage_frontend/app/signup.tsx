import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { router } from 'expo-router';

import { auth } from '../services/firebase';

export default function SignupScreen() {

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleSignup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      Alert.alert(
        'Success',
        'Account created successfully'
      );

      router.replace('/register');

    } catch (error: any) {

      Alert.alert(
        'Signup Failed',
        error.message
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🚑</Text>

      <Text style={styles.title}>
        Create Account
      </Text>

      <Text style={styles.subtitle}>
        Register to continue
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
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.replace('/')}
      >
        <Text style={styles.loginText}>
          Already have an account?
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

  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
  },
});