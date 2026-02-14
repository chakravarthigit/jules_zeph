import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { colors, shadows } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  FadeInUp,
  FadeInDown,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming
} from 'react-native-reanimated';

interface Props {
  navigation: NativeStackNavigationProp<OnboardingStackParamList, 'IdentityVerification'>;
}

const IdentityVerificationScreen: React.FC<Props> = ({ navigation }) => {
  const blob1Pos = useSharedValue(0);
  const blob2Pos = useSharedValue(0);

  React.useEffect(() => {
    blob1Pos.value = withRepeat(withTiming(20, { duration: 3000 }), -1, true);
    blob2Pos.value = withRepeat(withTiming(-20, { duration: 4000 }), -1, true);
  }, []);

  const blob1Style = useAnimatedStyle(() => ({
    transform: [{ translateY: blob1Pos.value }],
  }));

  const blob2Style = useAnimatedStyle(() => ({
    transform: [{ translateY: blob2Pos.value }],
  }));

  const handleFinish = () => {
    navigation.getParent()?.navigate('Main');
  };

  return (
    <View style={styles.container}>
      {/* Decorative Blobs */}
      <Animated.View style={[styles.blob, styles.blob1, blob1Style]} />
      <Animated.View style={[styles.blob, styles.blob2, blob2Style]} />

      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <ClayView style={styles.backBtnInner}>
            <Icon name="arrow-back" size={24} color={colors.text.slate} />
          </ClayView>
        </TouchableOpacity>

        <View style={styles.progressPill}>
          <View style={styles.dotsRow}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <Text style={styles.progressText}>Step 1 of 3</Text>
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="help-outline" size={24} color={colors.text.secondary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.delay(200)} style={styles.titleSection}>
          <Text style={styles.title}>
            Become a <Text style={styles.primaryText}>Verified</Text>{'\n'}Neighbor
          </Text>
          <Text style={styles.subtitle}>
            Build trust in your local loop. Verified neighbors get exclusive access to events and deals.
          </Text>
        </Animated.View>

        <View style={styles.stepsContainer}>
          {/* Step 1: Phone (Completed) */}
          <Animated.View entering={FadeInDown.delay(400)}>
            <ClayView style={styles.stepCard}>
              <View style={styles.completedBar} />
              <View style={styles.stepRow}>
                <View style={styles.iconCircle}>
                  <Icon name="smartphone" size={24} color={colors.primary} />
                  <View style={styles.iconGlow} />
                </View>
                <View style={styles.stepInfo}>
                  <Text style={styles.stepTitle}>Phone Number</Text>
                  <Text style={styles.stepDetail}>+1 (555) •••-••89</Text>
                </View>
                <View style={styles.checkCircle}>
                  <Icon name="check" size={16} color="white" />
                </View>
              </View>
            </ClayView>
          </Animated.View>

          {/* Step 2: Email (Active) */}
          <Animated.View entering={FadeInDown.delay(600)}>
            <ClayView style={styles.activeStepCard}>
              <View style={styles.stepRow}>
                <View style={[styles.iconCircle, { backgroundColor: '#f1f5f9' }]}>
                  <Icon name="mail" size={24} color={colors.text.secondary} />
                </View>
                <View style={styles.stepInfo}>
                  <Text style={styles.stepTitle}>Email Address</Text>
                  <Text style={styles.stepDetail}>Secure your account recovery</Text>
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="hello@zeph.com"
                  placeholderTextColor="#94a3b8"
                />
                <Icon name="edit" size={18} color="#94a3b8" style={styles.editIcon} />
              </View>

              <TouchableOpacity style={styles.verifyBtn} onPress={handleFinish}>
                <Text style={styles.verifyBtnText}>Verify Email</Text>
                <Icon name="arrow-forward" size={18} color="white" />
              </TouchableOpacity>
            </ClayView>
          </Animated.View>

          {/* Step 3: Identity (Locked) */}
          <Animated.View entering={FadeInDown.delay(800)}>
            <ClayView style={[styles.stepCard, styles.lockedStep]}>
              <View style={styles.stepRow}>
                <View style={[styles.iconCircle, { backgroundColor: '#f1f5f9' }]}>
                  <Icon name="shield" size={24} color="#cbd5e1" />
                </View>
                <View style={styles.stepInfo}>
                  <Text style={[styles.stepTitle, { color: '#64748b' }]}>Identity Badge</Text>
                  <Text style={styles.stepDetail}>Government ID Scan</Text>
                </View>
                <View style={styles.lockCircle}>
                  <Icon name="lock" size={16} color="#94a3b8" />
                </View>
              </View>
            </ClayView>
          </Animated.View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={handleFinish}>
            <Text style={styles.laterText}>I'll do this later</Text>
          </TouchableOpacity>
          <View style={styles.secureRow}>
            <Icon name="verified-user" size={14} color="#94a3b8" />
            <Text style={styles.secureText}>SECURE & ENCRYPTED</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  statusBarSpacer: {
    height: 50,
  },
  blob: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    opacity: 0.1,
  },
  blob1: {
    top: 100,
    left: -100,
    backgroundColor: colors.primary,
  },
  blob2: {
    bottom: 100,
    right: -100,
    backgroundColor: colors.accents.lavender,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    height: 60,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtnInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPill: {
    height: 36,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(74, 124, 255, 0.2)',
  },
  activeDot: {
    backgroundColor: colors.primary,
  },
  progressText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.text.secondary,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 38,
    letterSpacing: -0.5,
  },
  primaryText: {
    color: colors.primary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  stepsContainer: {
    gap: 20,
  },
  stepCard: {
    padding: 20,
    borderRadius: 32,
    position: 'relative',
    overflow: 'hidden',
  },
  completedBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
    backgroundColor: colors.primary,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 28,
    opacity: 0.1,
  },
  stepInfo: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
  },
  stepDetail: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 2,
  },
  checkCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  activeStepCard: {
    padding: 20,
    borderRadius: 32,
    backgroundColor: 'white',
  },
  inputWrapper: {
    backgroundColor: 'rgba(241, 245, 249, 0.5)',
    borderRadius: 16,
    marginTop: 20,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
  },
  editIcon: {
    marginLeft: 10,
  },
  verifyBtn: {
    backgroundColor: colors.primary,
    height: 54,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 15,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  verifyBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  lockedStep: {
    opacity: 0.6,
  },
  lockCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
    gap: 20,
    paddingBottom: 40,
  },
  laterText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  secureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  secureText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#cbd5e1',
    letterSpacing: 1,
  },
});

export default IdentityVerificationScreen;
