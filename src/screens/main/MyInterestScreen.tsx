import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { ClayView } from '../../components/ClayView';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const INTERESTS = [
  { id: '1', label: 'Art & Design', icon: 'palette' },
  { id: '2', label: 'Music', icon: 'music-note' },
  { id: '3', label: 'Technology', icon: 'computer' },
  { id: '4', label: 'Outdoor', icon: 'terrain' },
  { id: '5', label: 'Cooking', icon: 'restaurant' },
  { id: '6', label: 'Fitness', icon: 'fitness-center' },
  { id: '7', label: 'Photography', icon: 'camera-alt' },
  { id: '8', label: 'Gaming', icon: 'sports-esports' },
  { id: '9', label: 'Travel', icon: 'flight' },
  { id: '10', label: 'Reading', icon: 'menu-book' },
  { id: '11', label: 'Fashion', icon: 'checkroom' },
  { id: '12', label: 'Movies', icon: 'movie' },
];

const MyInterestScreen = () => {
  const [selected, setSelected] = useState<string[]>(['1', '3', '4']);

  const toggleInterest = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(i => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Icon name="close" size={24} color={colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Interests</Text>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>What are you interested in?</Text>
        <Text style={styles.subtitle}>Select at least 3 interests to personalize your feed.</Text>

        <View style={styles.grid}>
          {INTERESTS.map((interest, index) => {
            const isSelected = selected.includes(interest.id);
            return (
              <Animated.View key={interest.id} entering={FadeInDown.delay(index * 50)}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => toggleInterest(interest.id)}
                >
                  <ClayView style={[styles.interestCard, isSelected && styles.selectedCard]} inset={isSelected}>
                    <Icon name={interest.icon} size={32} color={isSelected ? 'white' : colors.primary} />
                    <Text style={[styles.interestLabel, isSelected && styles.selectedLabel]}>{interest.label}</Text>
                    {isSelected && (
                      <View style={styles.checkBadge}>
                        <Icon name="check" size={12} color={colors.primary} />
                      </View>
                    )}
                  </ClayView>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>

      <ClayView style={styles.footer}>
        <TouchableOpacity style={styles.continueBtn}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </ClayView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
  },
  saveBtn: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  saveText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: colors.text.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  interestCard: {
    width: (Dimensions.get('window').width - 55) / 2,
    height: 120,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    position: 'relative',
    marginBottom: 15,
  },
  selectedCard: {
    backgroundColor: colors.primary,
  },
  interestLabel: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.primary,
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  checkBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  continueBtn: {
    backgroundColor: colors.primary,
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  }
});

export default MyInterestScreen;
