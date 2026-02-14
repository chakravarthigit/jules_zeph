import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 60) / 2;

const INTERESTS = [
  { id: '1', title: 'Food & Dining', icon: 'restaurant', count: '12 places nearby' },
  { id: '2', title: 'Live Music', icon: 'music-note', count: '5 events this week' },
  { id: '3', title: 'Sports', icon: 'sports-basketball', count: 'Games & Courts' },
  { id: '4', title: 'Tech & AI', icon: 'computer', count: '3 workshops' },
  { id: '5', title: 'Art & Culture', icon: 'palette', count: 'Galleries open' },
  { id: '6', title: 'Nightlife', icon: 'local-bar', count: 'Clubs & Bars' },
  { id: '7', title: 'Outdoors', icon: 'hiking', count: 'Trails nearby' },
  { id: '8', title: 'Gaming', icon: 'sports-esports', count: 'LAN parties' },
];

interface Props {
  navigation: NativeStackNavigationProp<OnboardingStackParamList, 'Interests'>;
}

const InterestsScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['1', '4', '7']);

  const toggleInterest = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleApply = () => {
    navigation.navigate('RadiusSelector');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={32} color={colors.text.slate} />
          </TouchableOpacity>
          <Text style={styles.title}>My Interests</Text>
          <Text style={styles.subtitle}>Customize your discovery feed</Text>
        </View>
        <ClayView style={styles.profileThumbnail}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9iMl8CnUyYnYY87JauTyP3TkQko-FZD8sQRQpxR4b6BGw4MNHiJMiHaq60STeQ8TsAQnIhNF_8LJbW737h3pyBKb6qiIfTwuUgZkUksNJ5potQDzeG_bZ_EFv7h3dTiKRSVetqQ2pQJXT4Khm6-R7MrfH96fE2D19BvaPEvf_PXi1mndI8y-x5xktVLkl3URu6c4NgPbQigzNIxsyIM0hE3LSQJ41FjFK7qlg8AyEsrF2oJ5gEWFzouLieGjUoxIAGdSvrCQXb3s' }}
            style={styles.avatar}
          />
        </ClayView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {INTERESTS.map((item, index) => {
            const isSelected = selectedIds.includes(item.id);
            return (
              <Animated.View
                key={item.id}
                entering={FadeInDown.delay(index * 100).springify()}
              >
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => toggleInterest(item.id)}
                >
                  <ClayView
                    style={[styles.card, isSelected && styles.selectedCard]}
                    color={isSelected ? colors.primary : colors.background.pebble}
                  >
                    <View style={[styles.iconContainer, isSelected && styles.selectedIconContainer]}>
                      <Icon name={item.icon} size={28} color={isSelected ? 'white' : colors.text.slate} />
                    </View>
                    <View>
                      <Text style={[styles.cardTitle, isSelected && styles.selectedCardText]}>{item.title}</Text>
                      <Text style={[styles.cardCount, isSelected && styles.selectedCardCount]}>{item.count}</Text>
                    </View>
                    {isSelected && (
                      <View style={styles.checkBadge}>
                        <Icon name="check" size={14} color={colors.primary} />
                      </View>
                    )}
                  </ClayView>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.resetButton} onPress={() => setSelectedIds([])}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Icon name="filter-alt" size={20} color="white" />
          <Text style={styles.applyText}>Apply Filters</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 20,
    alignItems: 'flex-start',
  },
  backButton: {
    marginLeft: -10,
    marginBottom: 5,
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
  profileThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 10,
    padding: 2,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  scrollContent: {
    paddingHorizontal: 25,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
  },
  card: {
    width: COLUMN_WIDTH,
    height: COLUMN_WIDTH,
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 32,
  },
  selectedCard: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIconContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text.primary,
  },
  selectedCardText: {
    color: 'white',
  },
  cardCount: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
  },
  selectedCardCount: {
    color: 'rgba(255,255,255,0.8)',
  },
  checkBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingBottom: 40,
    paddingTop: 20,
    gap: 15,
    backgroundColor: colors.background.light,
  },
  resetButton: {
    flex: 1,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  resetText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text.slate,
  },
  applyButton: {
    flex: 2,
    height: 60,
    borderRadius: 20,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  applyText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});

export default InterestsScreen;
