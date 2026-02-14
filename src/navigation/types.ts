export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

export type OnboardingStackParamList = {
  Interests: undefined;
  RadiusSelector: undefined;
  IdentityVerification: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Discover: undefined;
  Create: undefined;
  Activity: undefined;
  Profile: undefined;
  Calendar: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Onboarding: undefined;
  Main: undefined;
  EventDetails: { eventId: string };
  Chat: { chatId: string };
  PostSuccess: undefined;
  EditProfile: undefined;
  Reputation: undefined;
  MyPosts: undefined;
  Wallet: undefined;
  Settings: undefined;
  Privacy: undefined;
  Support: undefined;
  NetworkError: undefined;
  DiscoveryArea: undefined;
  UserActivityInsights: undefined;
  MyInterest: undefined;
  SwipeDiscoveryMode: undefined;
  EmptyFeed: undefined;
  NearbyActivityFeed: undefined;
};
