import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, typography } from '../theme';
import Svg, { Circle, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }: any) => {
  const pulseAnim = React.useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.5,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    const timer = setTimeout(() => {
      navigation.replace('Auth');
    }, 3000);

    return () => {
      clearTimeout(timer);
      animation.stop();
    };
  }, [navigation, pulseAnim]);

  return (
    <LinearGradient colors={['#FFFBF0', '#E6F0FF']} style={styles.container}>
      <View style={styles.blobContainer}>
         <View style={[styles.blob, styles.blob1]} />
         <View style={[styles.blob, styles.blob2]} />
      </View>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.clayLogo}>
             <Svg height="100" width="100" viewBox="0 0 24 24">
                <Circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2" />
                <Path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.5 12C16.5 14.48 14.48 16.5 12 16.5C9.52 16.5 7.5 14.48 7.5 12C7.5 9.52 9.52 7.5 12 7.5C14.48 7.5 16.5 9.52 16.5 12Z"
                  fill="white"
                />
                <Circle cx="12" cy="12" r="3" fill="white" />
             </Svg>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.brandName}>ZEPH</Text>
          <View style={styles.taglineRow}>
            <Text style={styles.tagline}>Real people. Real places.</Text>
            <Text style={styles.rightNow}>Right now.</Text>
          </View>
        </View>

        <View style={styles.loadingContainer}>
          <View style={styles.loadingTrack}>
             <Animated.View style={[styles.loadingFill, { transform: [{ scaleX: pulseAnim }] }]} />
          </View>
          <Text style={styles.loadingText}>LOADING YOUR LOCAL WORLD</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blobContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  blob: {
    position: 'absolute',
    borderRadius: 200,
    backgroundColor: 'rgba(77, 127, 255, 0.1)',
  },
  blob1: {
    width: 300,
    height: 300,
    top: -50,
    left: -50,
  },
  blob2: {
    width: 350,
    height: 350,
    bottom: -100,
    right: -100,
  },
  content: {
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 40,
  },
  clayLogo: {
    width: 180,
    height: 180,
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 20,
    transform: [{ rotate: '3deg' }],
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  brandName: {
    fontSize: 60,
    fontWeight: '900',
    color: colors.primary,
    letterSpacing: -2,
  },
  taglineRow: {
    alignItems: 'center',
    marginTop: 10,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4b5563',
  },
  rightNow: {
    fontSize: 18,
    fontWeight: '800',
    color: 'rgba(77, 127, 255, 0.8)',
    marginTop: 4,
  },
  loadingContainer: {
    alignItems: 'center',
    width: width * 0.6,
  },
  loadingTrack: {
    height: 6,
    width: '100%',
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 12,
  },
  loadingFill: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  loadingText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#9ca3af',
    letterSpacing: 2,
  },
});

export default SplashScreen;
