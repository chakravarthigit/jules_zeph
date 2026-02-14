import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../theme';
import { GradientButton } from '../../components/GradientButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

interface Props {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Welcome'>;
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundBlobs}>
        <View style={styles.blob1} />
        <View style={styles.blob2} />
      </View>

      <View style={styles.heroSection}>
        <View style={styles.illustrationContainer}>
          <View style={styles.illustrationCard}>
            <View style={styles.placeholderImage} />
          </View>
          <View style={styles.locationPin}>
             <Icon name="near_me" size={32} color="white" />
          </View>
        </View>
      </View>

      <View style={styles.textSection}>
        <Text style={styles.title}>
          Your neighborhood has a <Text style={styles.pulseText}>pulse</Text>.
        </Text>
        <Text style={styles.subtitle}>Let's find it.</Text>
      </View>

      <View style={styles.footer}>
        <GradientButton
          title="Let's Go"
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        />
        <Text style={styles.legal}>
          By starting, you agree to our Terms & Privacy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 40,
  },
  backgroundBlobs: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    zIndex: -1,
  },
  blob1: {
    position: 'absolute',
    top: -100,
    right: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(77, 127, 255, 0.05)',
  },
  blob2: {
    position: 'absolute',
    bottom: 100,
    left: -100,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(84, 130, 247, 0.1)',
  },
  heroSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationContainer: {
    width: width * 0.8,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationCard: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: '#ced1d9',
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
  },
  placeholderImage: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  locationPin: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    marginLeft: -32,
    marginTop: -32,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    borderWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    zIndex: 10,
  },
  pinIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: typography.fontWeight.extraBold,
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: 48,
  },
  pulseText: {
    color: colors.primary,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.secondary,
    marginTop: 10,
  },
  footer: {
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginBottom: 20,
  },
  legal: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.medium,
  },
});

export default WelcomeScreen;
