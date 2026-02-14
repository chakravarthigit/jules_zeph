import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { GradientButton } from '../../components/GradientButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { useStore } from '../../store/useStore';
import Svg, { Circle, Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSpring,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface Props {
  navigation: NativeStackNavigationProp<OnboardingStackParamList, 'RadiusSelector'>;
}

const RadiusSelectorScreen: React.FC<Props> = ({ navigation }) => {
  const [radius, setRadius] = useState(2);
  const setDiscoveryRadius = useStore(state => state.setDiscoveryRadius);

  const pulseAnim = useSharedValue(1);

  useEffect(() => {
    pulseAnim.value = withRepeat(withTiming(1.2, { duration: 1500 }), -1, true);
  }, [pulseAnim]);

  const animatedPulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseAnim.value }],
    opacity: interpolate(pulseAnim.value, [1, 1.2], [0.5, 0], Extrapolate.CLAMP),
  }));

  const handleContinue = () => {
    setDiscoveryRadius(radius);
    navigation.navigate('IdentityVerification');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-left" size={32} color={colors.text.slate} />
        </TouchableOpacity>
        <Text style={styles.title}>Discovery Area</Text>
        <Text style={styles.subtitle}>Set your local exploration range</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.mapPreviewContainer}>
          <ClayView style={styles.mapPreview}>
            <View style={styles.mapPlaceholder}>
              <Svg height="100%" width="100%" style={styles.svgOverlay}>
                <Path d="M0 40 Q 50 20 100 40 T 200 40 T 300 40 T 400 60" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <Path d="M200 0 L 220 150" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                <Path d="M50 150 L 100 0" fill="none" stroke="#cbd5e1" strokeWidth="2" />
              </Svg>
              <Animated.View style={[styles.pulseCircle, animatedPulseStyle]} />
              <View style={styles.centerDot} />
              <View style={styles.locationBadge}>
                <Text style={styles.locationText}>New York, NY</Text>
              </View>
            </View>
          </ClayView>
        </View>

        <View style={styles.dialWrapper}>
          <ClayView style={styles.dialContainer}>
            <Svg style={styles.svgArc} width="240" height="240" viewBox="0 0 200 200">
              <Circle
                cx="100"
                cy="100"
                r="90"
                stroke="#e2e8f0"
                strokeWidth="12"
                fill="none"
                strokeDasharray="565"
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
              <Circle
                cx="100"
                cy="100"
                r="90"
                stroke={colors.primary}
                strokeWidth="12"
                fill="none"
                strokeDasharray="565"
                strokeDashoffset={565 - (radius / 5) * 565}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
            </Svg>
            <View style={styles.dialTextContent}>
              <Text style={styles.radiusValue}>{radius}<Text style={styles.unit}>km</Text></Text>
              <Text style={styles.radiusLabel}>RADIUS</Text>
            </View>

            {/* Knob simulation */}
            <View style={[styles.knob, { transform: [{ rotate: `${(radius / 5) * 360 - 90}deg` }, { translateX: 90 }] }]}>
               <View style={styles.knobCircle} />
            </View>

            <View style={styles.compassLabels}>
              <Text style={[styles.compassText, { top: 10 }]}>N</Text>
              <Text style={[styles.compassText, { bottom: 10 }]}>S</Text>
              <Text style={[styles.compassText, { left: 10 }]}>W</Text>
              <Text style={[styles.compassText, { right: 10 }]}>E</Text>
            </View>
          </ClayView>

          <View style={styles.dialFooter}>
             <Text style={styles.dialMark}>1km</Text>
             <Text style={[styles.dialMark, { color: colors.primary, fontSize: 14 }]}>{radius}km</Text>
             <Text style={styles.dialMark}>5km</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Your Neighborhood</Text>
          <Text style={styles.infoText}>
            You'll discover community events, local jams, and meetups within a <Text style={styles.boldText}>20 minute walk</Text> from your current location.
          </Text>
        </View>

        {/* Simple slider for radius control since we don't have a custom gesture knob yet */}
        <View style={styles.sliderControls}>
           <TouchableOpacity onPress={() => setRadius(Math.max(1, radius - 0.5))} style={styles.controlBtn}>
             <Icon name="remove" size={24} color={colors.primary} />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => setRadius(Math.min(5, radius + 0.5))} style={styles.controlBtn}>
             <Icon name="add" size={24} color={colors.primary} />
           </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleContinue}>
          <Icon name="check-circle" size={24} color="white" />
          <Text style={styles.saveButtonText}>Save Discovery Area</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  backButton: {
    marginLeft: -10,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text.primary,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    marginTop: 4,
  },
  scrollContent: {
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  mapPreviewContainer: {
    width: '100%',
    height: 130,
    marginVertical: 20,
  },
  mapPreview: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#e2e8f0',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgOverlay: {
    position: 'absolute',
  },
  pulseCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.primary,
    position: 'absolute',
  },
  centerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  locationBadge: {
    position: 'absolute',
    bottom: 12,
    right: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  locationText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
  },
  dialWrapper: {
    alignItems: 'center',
    marginVertical: 20,
  },
  dialContainer: {
    width: 240,
    height: 240,
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.clay.white,
  },
  svgArc: {
    position: 'absolute',
  },
  dialTextContent: {
    alignItems: 'center',
  },
  radiusValue: {
    fontSize: 48,
    fontWeight: '800',
    color: colors.primary,
  },
  unit: {
    fontSize: 24,
  },
  radiusLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94a3b8',
    letterSpacing: 2,
    marginTop: -4,
  },
  knob: {
    position: 'absolute',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  knobCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  compassLabels: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  compassText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    color: '#cbd5e1',
  },
  dialFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 15,
  },
  dialMark: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94a3b8',
  },
  infoSection: {
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  boldText: {
    fontWeight: '700',
    color: colors.text.primary,
  },
  sliderControls: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 30,
  },
  controlBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
  },
  saveButton: {
    backgroundColor: colors.primary,
    height: 64,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default RadiusSelectorScreen;
