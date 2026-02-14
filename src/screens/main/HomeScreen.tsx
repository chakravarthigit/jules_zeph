import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  FadeInDown,
  FadeIn
} from 'react-native-reanimated';

const HomeScreen = ({ navigation }: any) => {
  const blob1Scale = useSharedValue(1);
  const blob2Scale = useSharedValue(1);

  useEffect(() => {
    blob1Scale.value = withRepeat(withTiming(1.1, { duration: 3000 }), -1, true);
    blob2Scale.value = withRepeat(withTiming(1.1, { duration: 4000 }), -1, true);
  }, []);

  const blob1Style = useAnimatedStyle(() => ({
    transform: [{ scale: blob1Scale.value }],
  }));

  const blob2Style = useAnimatedStyle(() => ({
    transform: [{ scale: blob2Scale.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={28} color={colors.text.secondary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>DISCOVER</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="more-horiz" size={28} color={colors.text.secondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.illustrationWrapper}>
          <Animated.View style={[styles.blob, styles.blobPurple, blob1Style]} />
          <Animated.View style={[styles.blob, styles.blobYellow, blob2Style]} />
          <Animated.View style={[styles.blob, styles.blobBlue]} />

          <Animated.View entering={FadeIn} style={styles.mascotContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnr911n43lOJk5CbdVzMYCDPwGzVPNBiOV7_TF2_WC7WUVLg2bWNLTW0iB_BcORjbGRFmyTe2zZBeqTcUOCLwrOrEL1sBn1DrjJGNhMXqP4V_dvE0nB2A-8KzjBwbBXgXHzJJ8qVxsdLNrX3AkSrXXxBqsqfW40gtUvBeytG8aU2ZTx2jeesgpkmF6pvO3W1X6ic4Sw1pgdVcjjJ-wrik78rYZkQTDeA1LRSq8d8XaFITD6LV9wNsX7UYUJLSC3eBwSPsdrawgmfU' }}
              style={styles.mascot}
              resizeMode="cover"
            />
            <View style={styles.floatingDot1} />
            <View style={styles.floatingDot2} />
          </Animated.View>
        </View>

        <View style={styles.textSection}>
          <Text style={styles.title}>
            Nothing here...{'\n'}<Text style={styles.primaryText}>yet!</Text>
          </Text>
          <Text style={styles.subtitle}>
            Your neighborhood is just waking up. Why not start something yourself?
          </Text>
        </View>

        <View style={styles.actionSection}>
          <TouchableOpacity style={styles.createBtn} onPress={() => navigation.navigate('Create')}>
            <View style={styles.createBtnContent}>
              <Icon name="add-circle" size={24} color="white" />
              <Text style={styles.createBtnText}>Create First Post</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exploreLink}>
            <Text style={styles.exploreText}>Explore nearby areas instead</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 100 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  statusBarSpacer: {
    height: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    height: 60,
  },
  iconButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: 'rgba(74, 124, 255, 0.6)',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  illustrationWrapper: {
    width: 260,
    height: 260,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  blob: {
    position: 'absolute',
    borderRadius: 100,
    opacity: 0.5,
  },
  blobPurple: {
    width: 130,
    height: 130,
    top: 0,
    right: 0,
    backgroundColor: '#E9D5FF',
  },
  blobYellow: {
    width: 130,
    height: 130,
    top: 0,
    left: 0,
    backgroundColor: '#FEF3C7',
  },
  blobBlue: {
    width: 130,
    height: 130,
    bottom: -20,
    left: 60,
    backgroundColor: 'rgba(74, 124, 255, 0.3)',
  },
  mascotContainer: {
    width: 260,
    height: 260,
    borderRadius: 130,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  mascot: {
    width: '100%',
    height: '100%',
  },
  floatingDot1: {
    position: 'absolute',
    top: 40,
    right: 60,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    opacity: 0.8,
  },
  floatingDot2: {
    position: 'absolute',
    bottom: 80,
    left: 40,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    opacity: 0.6,
  },
  textSection: {
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 40,
  },
  primaryText: {
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  actionSection: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
  },
  createBtn: {
    backgroundColor: colors.primary,
    height: 68,
    borderRadius: 24,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  createBtnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  createBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  exploreLink: {
    marginTop: 25,
  },
  exploreText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94a3b8',
  },
});

export default HomeScreen;
