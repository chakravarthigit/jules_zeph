import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from './types';
import InterestsScreen from '../screens/onboarding/InterestsScreen';
import RadiusSelectorScreen from '../screens/onboarding/RadiusSelectorScreen';
import IdentityVerificationScreen from '../screens/onboarding/IdentityVerificationScreen';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Interests" component={InterestsScreen} />
      <Stack.Screen name="RadiusSelector" component={RadiusSelectorScreen} />
      <Stack.Screen name="IdentityVerification" component={IdentityVerificationScreen} />
    </Stack.Navigator>
  );
};
