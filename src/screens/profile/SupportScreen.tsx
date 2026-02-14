import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  FadeInUp
} from 'react-native-reanimated';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Support'>;
}

const SupportScreen: React.FC<Props> = ({ navigation }) => {
  const floatAnim = useSharedValue(0);

  useEffect(() => {
    floatAnim.value = withRepeat(withTiming(-15, { duration: 2500 }), -1, true);
  }, []);

  const mascotStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: floatAnim.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <ClayView style={styles.iconBtnInner}>
            <Icon name="arrow-back" size={24} color={colors.primary} />
          </ClayView>
        </TouchableOpacity>
        <Text style={styles.title}>Support</Text>
        <View style={styles.iconButton} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <View style={styles.glowBlob} />
          <Animated.View style={[styles.mascotContainer, mascotStyle]}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEXtORWcBYiTupl7hDSUkxXhPNaC3V5ZnBbd1u4QjD5XGsOBJVblTx7ujuGDeUkbHI44q53kAGdmNwJBJWTvWs8hBdtj0gCFXT3FK-ShLEcxqRz3-MdWjW0s34c0eUAc7FC2D6F3VIPIu7KxHZrH0k2Chjzcs1pTWCVNvG1vNuBs3p08R4E9tZGGi3DSbPP-okeE7mDCBPtcqV43BPTJ6AZJWQ3jIJRUyE0Jboj2_iQ4Gpy2iXUrXU0WIg12wjlxxeoGLttSPrCVQ' }}
              style={styles.mascot}
              resizeMode="cover"
            />
          </Animated.View>
        </View>

        <Text style={styles.greeting}>How can we help?</Text>

        <ClayView style={styles.mainCard}>
          <View style={styles.actionPills}>
            <TouchableOpacity activeOpacity={0.9} style={styles.primaryPill}>
              <View style={styles.pillContent}>
                <View style={styles.pillIconBg}>
                  <Icon name="chat-bubble" size={20} color="white" />
                </View>
                <Text style={styles.primaryPillText}>Chat with us</Text>
              </View>
              <Icon name="chevron-right" size={24} color="rgba(255,255,255,0.8)" />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9}>
              <ClayView style={styles.secondaryPill} color={colors.background.pebble}>
                <View style={styles.pillContent}>
                  <View style={[styles.pillIconBg, { backgroundColor: 'rgba(148, 163, 184, 0.2)' }]}>
                    <Icon name="mail" size={20} color={colors.text.slate} />
                  </View>
                  <Text style={styles.secondaryPillText}>Email Support</Text>
                </View>
                <Icon name="chevron-right" size={24} color="#94a3b8" />
              </ClayView>
            </TouchableOpacity>
          </View>

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Describe your issue</Text>
            <ClayView inset style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                placeholder="Tell us what's happening..."
                placeholderTextColor="#94a3b8"
                multiline
                numberOfLines={4}
              />
              <Text style={styles.charCount}>0/500</Text>
            </ClayView>

            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send Message</Text>
              <Icon name="send" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </ClayView>

        <View style={styles.footer}>
          <TouchableOpacity><Text style={styles.footerLink}>FAQ</Text></TouchableOpacity>
          <Text style={styles.footerDot}>•</Text>
          <TouchableOpacity><Text style={[styles.footerLink, styles.secondaryFooterLink]}>Terms</Text></TouchableOpacity>
          <Text style={styles.footerDot}>•</Text>
          <TouchableOpacity><Text style={[styles.footerLink, styles.secondaryFooterLink]}>Privacy</Text></TouchableOpacity>
        </View>
        <View style={{ height: 40 }} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  iconButton: {
    width: 48,
    height: 48,
  },
  iconBtnInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text.primary,
    letterSpacing: 0.5,
  },
  scrollContent: {
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  heroSection: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  glowBlob: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(43, 140, 238, 0.15)',
  },
  mascotContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: 'hidden',
  },
  mascot: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
  },
  greeting: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: -0.5,
  },
  mainCard: {
    width: '100%',
    padding: 24,
    borderRadius: 32,
  },
  actionPills: {
    gap: 16,
  },
  primaryPill: {
    backgroundColor: colors.status.info,
    height: 64,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: colors.status.info,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  pillContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  pillIconBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryPillText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  secondaryPill: {
    height: 64,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  secondaryPillText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.slate,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    gap: 15,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#e2e8f0',
    borderRadius: 1,
  },
  dividerText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#cbd5e1',
    letterSpacing: 2,
  },
  form: {
    gap: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.secondary,
    marginLeft: 8,
  },
  textAreaContainer: {
    borderRadius: 20,
    padding: 15,
    height: 140,
  },
  textArea: {
    flex: 1,
    fontSize: 16,
    color: colors.text.primary,
    textAlignVertical: 'top',
  },
  charCount: {
    alignSelf: 'flex-end',
    fontSize: 10,
    color: '#94a3b8',
    fontWeight: '600',
  },
  sendButton: {
    backgroundColor: colors.status.info,
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
    shadowColor: colors.status.info,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 30,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.status.info,
  },
  secondaryFooterLink: {
    color: colors.text.secondary,
  },
  footerDot: {
    color: '#cbd5e1',
  },
});

export default SupportScreen;
