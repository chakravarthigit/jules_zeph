import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  FadeIn
} from 'react-native-reanimated';

const NetworkErrorScreen = ({ navigation }: any) => {
  const floatAnim = useSharedValue(0);
  const bounceAnim = useSharedValue(0);

  useEffect(() => {
    floatAnim.value = withRepeat(withTiming(-10, { duration: 3000 }), -1, true);
    bounceAnim.value = withRepeat(
      withSequence(
        withTiming(-20, { duration: 500 }),
        withTiming(0, { duration: 500 })
      ),
      -1,
      true
    );
  }, []);

  const mascotStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: floatAnim.value }, { rotate: '-5deg' }],
  }));

  const bounceStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bounceAnim.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.blob1} />
      <View style={styles.blob2} />

      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
           <View style={styles.statusDot} />
           <View style={styles.statusDot} />
           <View style={[styles.statusDot, { opacity: 0.5 }]} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.mascotWrapper}>
          <View style={styles.mascotShadow} />
          <Animated.View style={[styles.mascotContainer, mascotStyle]}>
            <View style={styles.clayBody}>
               <View style={styles.bodyGlow} />
            </View>
            <View style={styles.clayHead}>
               <View style={styles.eyesRow}>
                  <View style={styles.eye} />
                  <View style={styles.eye} />
               </View>
               <View style={styles.mouth} />
               <View style={styles.blushLeft} />
               <View style={styles.blushRight} />
            </View>
          </Animated.View>

          <Animated.View style={[styles.questionBadge, bounceStyle]}>
             <Text style={styles.questionMark}>?</Text>
          </Animated.View>

          <View style={styles.signalIcon}>
            <Icon name="signal-cellular-off" size={32} color="#8c8c9a" />
          </View>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.title}>Your Neighborhood is Napping</Text>
          <Text style={styles.subtitle}>
            We can't seem to connect to the pulse right now. Check your signal or try again soon.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.tryAgainBtn} onPress={() => navigation.goBack()}>
          <View style={styles.btnContent}>
            <Icon name="refresh" size={24} color="white" />
            <Text style={styles.tryAgainText}>Try Again</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsBtn}>
          <ClayView style={styles.settingsBtnInner} color="white">
            <Icon name="settings" size={20} color={colors.text.secondary} />
            <Text style={styles.settingsText}>Open Signal Settings</Text>
          </ClayView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    paddingHorizontal: 30,
  },
  blob1: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
  },
  blob2: {
    position: 'absolute',
    bottom: 50,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(74, 124, 255, 0.05)',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    opacity: 0.6,
  },
  time: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.primary,
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 6,
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.text.primary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mascotWrapper: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mascotShadow: {
    position: 'absolute',
    bottom: 20,
    width: 180,
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 100,
  },
  mascotContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clayBody: {
    width: 160,
    height: 130,
    backgroundColor: colors.primary,
    borderRadius: 60,
    position: 'absolute',
    bottom: 20,
    overflow: 'hidden',
  },
  bodyGlow: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  clayHead: {
    width: 130,
    height: 130,
    backgroundColor: '#f3dcca',
    borderRadius: 60,
    position: 'absolute',
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  eyesRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  eye: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#334155',
  },
  mouth: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(51, 65, 85, 0.4)',
    marginTop: 15,
  },
  blushLeft: {
    position: 'absolute',
    left: 20,
    top: 60,
    width: 15,
    height: 10,
    backgroundColor: 'rgba(248, 113, 113, 0.2)',
    borderRadius: 10,
  },
  blushRight: {
    position: 'absolute',
    right: 20,
    top: 60,
    width: 15,
    height: 10,
    backgroundColor: 'rgba(248, 113, 113, 0.2)',
    borderRadius: 10,
  },
  questionBadge: {
    position: 'absolute',
    top: 20,
    right: 40,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  questionMark: {
    fontSize: 40,
    fontWeight: '900',
    color: colors.primary,
  },
  signalIcon: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    opacity: 0.8,
  },
  textSection: {
    alignItems: 'center',
    gap: 15,
    marginTop: -20,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 28,
    paddingHorizontal: 10,
  },
  footer: {
    paddingBottom: 50,
    gap: 20,
  },
  tryAgainBtn: {
    backgroundColor: colors.primary,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tryAgainText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
  settingsBtn: {
    height: 60,
  },
  settingsBtnInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  settingsText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.slate,
  },
});

export default NetworkErrorScreen;
