import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterPatientScreen from '../screens/RegisterPatientScreen';
import AnalysisScreen from '../screens/AnalysisScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="RegisterPatient"
          component={RegisterPatientScreen}
          options={{ title: 'Register Patient' }}
        />

        <Stack.Screen
          name="Analysis"
          component={AnalysisScreen}
          options={{ title: 'AI Analysis' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}