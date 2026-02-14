import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { GradientButton } from '../../components/GradientButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { useStore } from '../../store/useStore';

interface Props {
  navigation: NativeStackNavigationProp<OnboardingStackParamList, 'IdentityVerification'>;
}

const IdentityVerificationScreen: React.FC<Props> = ({ navigation }) => {
  const setOnboarded = useStore(state => state.setOnboarded);

  const handleComplete = () => {
    setOnboarded(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>All set!</Text>
        <Text style={styles.subtitle}>Your profile is ready. You're now a verified member of the community.</Text>
      </View>

      <View style={styles.content}>
        <ClayView style={styles.card}>
           <View style={styles.successIcon}>
              <Text style={styles.check}>✓</Text>
           </View>
           <Text style={styles.statusTitle}>Verified</Text>
           <Text style={styles.statusDesc}>Identity confirmed via secure check</Text>
        </ClayView>
      </View>

      <View style={styles.footer}>
        <GradientButton
          title="Go to Map"
          onPress={handleComplete}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    paddingHorizontal: 30,
    paddingTop: 100,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: typography.fontWeight.black,
    color: colors.text.primary,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    padding: 40,
    alignItems: 'center',
    borderRadius: 30,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.status.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: colors.status.success,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  check: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  statusTitle: {
    fontSize: 24,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: 8,
  },
  statusDesc: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
});

export default IdentityVerificationScreen;
