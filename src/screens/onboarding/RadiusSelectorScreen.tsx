import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { GradientButton } from '../../components/GradientButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { useStore } from '../../store/useStore';
import Svg, { Circle, Defs, LinearGradient as SvgGradient, Stop } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

interface Props {
  navigation: NativeStackNavigationProp<OnboardingStackParamList, 'RadiusSelector'>;
}

const RadiusSelectorScreen: React.FC<Props> = ({ navigation }) => {
  const [radius, setRadius] = useState(2);
  const setDiscoveryRadius = useStore(state => state.setDiscoveryRadius);

  const handleContinue = () => {
    setDiscoveryRadius(radius);
    navigation.navigate('IdentityVerification');
  };

  // Simple dial logic: for now we'll use buttons to simulate, but UI will look like the design
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>How far do you {'\n'}want to explore?</Text>
        <Text style={styles.subtitle}>We'll show you what's happening within this circle.</Text>
      </View>

      <View style={styles.dialContainer}>
        <View style={styles.labelWrapper}>
          <Text style={styles.zoneLabel}>Discovery Zone</Text>
        </View>

        <View style={styles.outerDial}>
          <ClayView style={styles.innerGroove} inset>
             <View style={styles.centerCard}>
                <Text style={styles.radiusValue}>{radius} <Text style={styles.unit}>km</Text></Text>
                <Text style={styles.radiusStatus}>SELECTED</Text>
             </View>
          </ClayView>

          <Svg style={styles.svgArc} width="100%" height="100%" viewBox="0 0 100 100">
            <Circle
              cx="50"
              cy="50"
              r="40"
              stroke="#eee"
              strokeWidth="8"
              fill="none"
              strokeDasharray="251"
              strokeDashoffset="60"
              strokeLinecap="round"
              transform="rotate(135 50 50)"
            />
            <Circle
              cx="50"
              cy="50"
              r="40"
              stroke={colors.primary}
              strokeWidth="8"
              fill="none"
              strokeDasharray="251"
              strokeDashoffset={251 - (radius / 5) * 190}
              strokeLinecap="round"
              transform="rotate(135 50 50)"
            />
          </Svg>
        </View>

        <View style={styles.controls}>
           <TouchableOpacity onPress={() => setRadius(Math.max(1, radius - 1))} style={styles.controlBtn}>
             <Icon name="remove" size={24} color={colors.primary} />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => setRadius(Math.min(5, radius + 1))} style={styles.controlBtn}>
             <Icon name="add" size={24} color={colors.primary} />
           </TouchableOpacity>
        </View>

        <View style={styles.description}>
          <Text style={styles.descTitle}>A quick bike ride</Text>
          <Text style={styles.descText}>Perfect for discovering nearby cafes and spots within a short cycling distance.</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <GradientButton
          title="Start Exploring"
          onPress={handleContinue}
          style={styles.button}
        />
        <TouchableOpacity onPress={() => handleContinue()}>
          <Text style={styles.skipLink}>I'll set this later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: typography.fontWeight.black,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 38,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  dialContainer: {
    flex: 1,
    alignItems: 'center',
  },
  labelWrapper: {
    backgroundColor: colors.background.light,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(209, 217, 230, 0.5)',
    marginBottom: 30,
  },
  zoneLabel: {
    fontSize: 10,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  outerDial: {
    width: width * 0.7,
    height: width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  innerGroove: {
    width: '90%',
    height: '90%',
    borderRadius: width * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCard: {
    width: '70%',
    height: '70%',
    borderRadius: width * 0.25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  radiusValue: {
    fontSize: 48,
    fontWeight: typography.fontWeight.black,
    color: colors.text.primary,
  },
  unit: {
    fontSize: 18,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.semiBold,
  },
  radiusStatus: {
    fontSize: 10,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    letterSpacing: 2,
    marginTop: 4,
  },
  svgArc: {
    position: 'absolute',
    zIndex: 1,
  },
  controls: {
    flexDirection: 'row',
    gap: 40,
    marginTop: 20,
  },
  controlBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  description: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  descTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: 8,
  },
  descText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginBottom: 20,
  },
  skipLink: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.medium,
  },
});

export default RadiusSelectorScreen;
