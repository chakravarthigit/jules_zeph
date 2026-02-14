import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { GradientButton } from '../../components/GradientButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { useStore } from '../../store/useStore';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setAuthenticated = useStore(state => state.setAuthenticated);

  const handleLogin = () => {
    // In a real app, we'd validate and call a service
    setAuthenticated(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Z</Text>
        </View>
        <Text style={styles.title}>ZEPH</Text>
        <Text style={styles.subtitle}>Discover your local vibe.</Text>
      </View>

      <ClayView style={styles.formCard}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>EMAIL</Text>
          <View style={styles.inputWrapper}>
            <Icon name="mail-outline" size={20} color={colors.primary} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="hello@zeph.app"
              placeholderTextColor={colors.clay.gray}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>PASSWORD</Text>
          <View style={styles.inputWrapper}>
            <Icon name="lock-open" size={20} color={colors.primary} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={colors.clay.gray}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Icon name="visibility-off" size={20} color={colors.clay.gray} />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <GradientButton
          title="Sign In"
          onPress={handleLogin}
          style={styles.loginButton}
        />
      </ClayView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          New to Zeph?{' '}
          <Text style={styles.signUpLink} onPress={() => navigation.navigate('Signup')}>
            Create Account
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background.light,
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 20,
    transform: [{ rotate: '3deg' }],
  },
  logoText: {
    fontSize: 40,
    fontWeight: typography.fontWeight.black,
    color: colors.primary,
  },
  title: {
    fontSize: 32,
    fontWeight: typography.fontWeight.black,
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.secondary,
    marginTop: 4,
  },
  formCard: {
    padding: 24,
    borderRadius: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 10,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.secondary,
    marginLeft: 10,
    marginBottom: 8,
    letterSpacing: 1,
  },
  inputWrapper: {
    backgroundColor: colors.background.light,
    borderRadius: 18,
    paddingHorizontal: 16,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    // Inner shadow simulated with border
    borderWidth: 1,
    borderColor: 'rgba(209, 217, 227, 0.5)',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
    fontWeight: typography.fontWeight.medium,
  },
  forgotPassword: {
    textAlign: 'right',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.text.secondary,
    marginBottom: 24,
  },
  loginButton: {
    width: '100%',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.medium,
  },
  signUpLink: {
    color: colors.primary,
    fontWeight: typography.fontWeight.bold,
  },
});

export default LoginScreen;
