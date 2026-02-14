import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { GradientButton } from '../../components/GradientButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { useStore } from '../../store/useStore';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  navigation: NativeStackNavigationProp<OnboardingStackParamList, 'Interests'>;
}

const INTERESTS = [
  { id: 'food', label: 'Foodie', emoji: '🍕', sub: 'Local Eats' },
  { id: 'active', label: 'Active', emoji: '🏃', sub: 'Fitness & Run' },
  { id: 'arts', label: 'Arts', emoji: '🎨', sub: 'Galleries & DIY' },
  { id: 'music', label: 'Music', emoji: '🎵', sub: 'Live & Local' },
  { id: 'nature', label: 'Nature', emoji: '🌳', sub: 'Parks & Trails' },
  { id: 'social', label: 'Social', emoji: '🎉', sub: 'Meetups' },
];

const InterestsScreen: React.FC<Props> = ({ navigation }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const setInterests = useStore(state => state.setInterests);

  const toggleInterest = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(i => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleContinue = () => {
    setInterests(selected);
    navigation.navigate('RadiusSelector');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
           <Icon name="arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>What lights {'\n'}<Text style={styles.primaryText}>you up?</Text></Text>
        <Text style={styles.subtitle}>(Select all that apply)</Text>
      </View>

      <FlatList
        data={INTERESTS}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => {
          const isSelected = selected.includes(item.id);
          return (
            <TouchableOpacity
              style={styles.cardWrapper}
              onPress={() => toggleInterest(item.id)}
              activeOpacity={0.8}
            >
              <ClayView inset={isSelected} style={[styles.card, isSelected && styles.selectedCard]}>
                <Text style={styles.emoji}>{item.emoji}</Text>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.subLabel}>{item.sub}</Text>
                {isSelected && <View style={styles.checkBadge}><Icon name="check" size={16} color="white" /></View>}
              </ClayView>
            </TouchableOpacity>
          );
        }}
      />

      <View style={styles.footer}>
        <GradientButton
          title="These look good"
          onPress={handleContinue}
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
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  backIcon: {
    fontSize: 20,
    color: colors.primary,
  },
  title: {
    fontSize: 40,
    fontWeight: typography.fontWeight.black,
    color: colors.text.primary,
    lineHeight: 44,
  },
  primaryText: {
    color: colors.primary,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.medium,
    marginTop: 8,
  },
  listContent: {
    paddingBottom: 100,
  },
  cardWrapper: {
    flex: 1,
    margin: 8,
    aspectRatio: 0.9,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    padding: 15,
  },
  selectedCard: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  label: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  subLabel: {
    fontSize: 10,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.secondary,
    marginTop: 4,
  },
  checkBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingHorizontal: 30,
  },
  button: {
    width: '100%',
  },
});

export default InterestsScreen;
