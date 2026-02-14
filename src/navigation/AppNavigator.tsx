import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { AuthNavigator } from './AuthNavigator';
import { OnboardingNavigator } from './OnboardingNavigator';
import { useStore } from '../store/useStore';
import { MainTabNavigator } from './MainTabNavigator';
import SplashScreen from '../screens/SplashScreen';
import EventDetailsScreen from '../screens/main/EventDetailsScreen';
import ChatScreen from '../screens/main/ChatScreen';
import PostSuccessScreen from '../screens/main/PostSuccessScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import ReputationScreen from '../screens/profile/ReputationScreen';
import MyPostsScreen from '../screens/profile/MyPostsScreen';
import WalletScreen from '../screens/profile/WalletScreen';
import SettingsScreen from '../screens/profile/SettingsScreen';
import PrivacyScreen from '../screens/profile/PrivacyScreen';
import SupportScreen from '../screens/profile/SupportScreen';
import NetworkErrorScreen from '../screens/main/NetworkErrorScreen';
import DiscoveryAreaScreen from '../screens/main/DiscoveryAreaScreen';
import UserActivityInsightsScreen from '../screens/main/UserActivityInsightsScreen';
import MyInterestScreen from '../screens/main/MyInterestScreen';
import SwipeDiscoveryModeScreen from '../screens/main/SwipeDiscoveryModeScreen';
import EmptyFeedScreen from '../screens/main/EmptyFeedScreen';
import NearbyActivityFeedScreen from '../screens/main/NearbyActivityFeedScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const { isAuthenticated, isOnboarded } = useStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="PostSuccess" component={PostSuccessScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Reputation" component={ReputationScreen} />
        <Stack.Screen name="MyPosts" component={MyPostsScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="NetworkError" component={NetworkErrorScreen} />
        <Stack.Screen name="DiscoveryArea" component={DiscoveryAreaScreen} />
        <Stack.Screen name="UserActivityInsights" component={UserActivityInsightsScreen} />
        <Stack.Screen name="MyInterest" component={MyInterestScreen} />
        <Stack.Screen name="SwipeDiscoveryMode" component={SwipeDiscoveryModeScreen} />
        <Stack.Screen name="EmptyFeed" component={EmptyFeedScreen} />
        <Stack.Screen name="NearbyActivityFeed" component={NearbyActivityFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
