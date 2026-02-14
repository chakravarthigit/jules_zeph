import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Reputation'>;
}

const REVIEWS = [
  {
    id: '1',
    user: 'Sarah Mitchell',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS6E-I6EcgR7_Qonj2PA3hhR0yAUmIxui3q0jKXNHtfdxcM_bTsmxZGW4dH2GuENPHaPDSYW9osIySv0tLQtckWVAHhXVEEPATLFnRTXBuzWduygPx_68u6BxMpgC6hcOpX8oaB-5hMI7dTNO4QhxsikTfldN9PtA0hofWjBqu1t8XUtzZB1zjfpOgObE4SnWLyu97rN92j65_d02HhwxqmIzGJ2PIJbDjUX2KRHvzpcpMZgXCEkvFKT_RgMkfUlw1V7bgFfVLcRg',
    time: '2 days ago',
    category: 'Neighborhood Cleanup',
    rating: 5,
    comment: 'Alex was super helpful with the neighborhood cleanup tool! He brought extra bags and stayed late to help sort recycling. A true community gem.',
    tags: ['Helpful', 'Punctual']
  },
  {
    id: '2',
    user: 'Davon Lewis',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAl4mav0ejUMHmpK8gbGPiy2TaAQUQ7VFsWnE-dkjuW62Ld_yI2NAiAsHEqhnaEjzB_8cP2cqtMEDyIljwjf0aRoY7nzU0yd_4hOOg3WYbE2LkdBv-i7dCZ7hEsTm9i1NMxjgF2ZDWJn8r0VCK4LXH1o8Ti1s4RbCyPxXDupwipMYL1DypAU_MSrXO57U_wDvjuNrQud0CSAQb8wjDR_f81rcqtfeU9gJN0mdFvSNVGKgTZxkDdl71yuTci9uTU2BQ_r2nTR05L_w',
    time: '1 week ago',
    category: 'Marketplace',
    rating: 4,
    comment: 'Great communication, item was exactly as described. The pickup was easy to coordinate. Thanks Alex!',
    tags: []
  },
  {
    id: '3',
    user: 'Jenna K.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByrk33vjsQ4uMvaIg4_r2xxvDVJ_hkbC-ZZkgQvAG0VxKevxVW40RD7WFY7QLrzHE8cI4SUpOYOQJ85IzDRctAMz7TqsFVzZUBLoKiR35YeT8JJZoDwtdMPutUVsb_1HLWPz1enLyvugxjXLR4YBJ3A7-nlUpgdH4QAoVv2pFgI0PQxpac72uDs9PQPRZmaGYrnYf_GyUGte-ymj-Kto0TYnh1hHp8UukEihZ8KJ7bOthXHryoqWRjVzyWAuSFXsqy_NWODgMS7eU',
    time: '2 weeks ago',
    category: 'Dog Walking',
    rating: 5,
    comment: 'Highly trusted neighbor. Would recommend to anyone looking for pet care. My dog loves him!',
    tags: ['Verified Service']
  }
];

const ReputationScreen: React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Received');

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <ClayView style={styles.iconBtnInner}>
            <Icon name="arrow-back" size={24} color={colors.text.slate} />
          </ClayView>
        </TouchableOpacity>
        <Text style={styles.title}>Reputation Center</Text>
        <TouchableOpacity style={styles.iconButton}>
          <ClayView style={styles.iconBtnInner}>
            <Icon name="share" size={24} color={colors.text.slate} />
          </ClayView>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <ClayView style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarClay}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9iMl8CnUyYnYY87JauTyP3TkQko-FZD8sQRQpxR4b6BGw4MNHiJMiHaq60STeQ8TsAQnIhNF_8LJbW737h3pyBKb6qiIfTwuUgZkUksNJ5potQDzeG_bZ_EFv7h3dTiKRSVetqQ2pQJXT4Khm6-R7MrfH96fE2D19BvaPEvf_PXi1mndI8y-x5xktVLkl3URu6c4NgPbQigzNIxsyIM0hE3LSQJ41FjFK7qlg8AyEsrF2oJ5gEWFzouLieGjUoxIAGdSvrCQXb3s' }}
                style={styles.avatar}
              />
            </View>
            <View style={styles.verifiedBadge}>
              <Icon name="verified" size={14} color="white" />
            </View>
          </View>
          <Text style={styles.userName}>Alex Johnson</Text>
          <Text style={styles.userMeta}>Member since 2021 • Downtown District</Text>

          <View style={styles.trustScoreBadge}>
            <Icon name="shield" size={20} color={colors.primary} />
            <Text style={styles.scoreText}>4.9</Text>
            <Text style={styles.scoreLabel}>TRUST SCORE</Text>
          </View>
        </ClayView>

        <ClayView inset style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Received' && styles.activeTab]}
            onPress={() => setActiveTab('Received')}
          >
            <Text style={[styles.tabText, activeTab === 'Received' && styles.activeTabText]}>Received</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Given' && styles.activeTab]}
            onPress={() => setActiveTab('Given')}
          >
            <Text style={[styles.tabText, activeTab === 'Given' && styles.activeTabText]}>Given</Text>
          </TouchableOpacity>
        </ClayView>

        <View style={styles.listHeader}>
          <View>
            <Text style={styles.totalReviews}>124</Text>
            <Text style={styles.reviewsLabel}>TOTAL REVIEWS</Text>
          </View>
          <TouchableOpacity style={styles.sortButton}>
             <Text style={styles.sortLabel}>Sort by:</Text>
             <Text style={styles.sortValue}>Recent</Text>
             <Icon name="keyboard-arrow-down" size={18} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.reviewList}>
          {REVIEWS.map((review, index) => (
            <Animated.View key={review.id} entering={FadeInDown.delay(index * 150)}>
              <ClayView style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <View style={styles.reviewerInfo}>
                    <Image source={{ uri: review.avatar }} style={styles.reviewerAvatar} />
                    <View>
                      <Text style={styles.reviewerName}>{review.user}</Text>
                      <Text style={styles.reviewMeta}>{review.time} • {review.category}</Text>
                    </View>
                  </View>
                  <View style={styles.starsRow}>
                    {[1, 2, 3, 4, 5].map(s => (
                      <Icon
                        key={s}
                        name="star"
                        size={16}
                        color={s <= review.rating ? colors.primary : '#e2e8f0'}
                      />
                    ))}
                  </View>
                </View>
                <Text style={styles.reviewComment}>{review.comment}</Text>
                {review.tags.length > 0 && (
                  <View style={styles.tagsRow}>
                    {review.tags.map(tag => (
                      <View key={tag} style={styles.tagPill}>
                        <Text style={styles.tagText}>{tag}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </ClayView>
            </Animated.View>
          ))}
        </View>

        <Text style={styles.endText}>End of reviews</Text>
        <View style={{ height: 100 }} />
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Icon name="add-comment" size={28} color="white" />
      </TouchableOpacity>
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
    paddingBottom: 20,
  },
  iconButton: {
    width: 44,
    height: 44,
  },
  iconBtnInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text.primary,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  profileCard: {
    padding: 30,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 15,
  },
  avatarClay: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
    padding: 2,
    backgroundColor: '#f1f5f9',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text.primary,
    marginBottom: 4,
  },
  userMeta: {
    fontSize: 13,
    color: colors.text.secondary,
    marginBottom: 20,
  },
  trustScoreBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(74, 124, 255, 0.2)',
    gap: 8,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary,
  },
  scoreLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.primary,
    opacity: 0.8,
    letterSpacing: 1,
    marginLeft: 4,
  },
  tabBar: {
    height: 56,
    flexDirection: 'row',
    borderRadius: 16,
    padding: 4,
    marginBottom: 30,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  activeTabText: {
    color: 'white',
    fontWeight: '700',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  totalReviews: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text.primary,
  },
  reviewsLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.text.secondary,
    letterSpacing: 1,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  sortLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.secondary,
  },
  sortValue: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primary,
  },
  reviewList: {
    gap: 20,
  },
  reviewCard: {
    padding: 20,
    borderRadius: 24,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  reviewerAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f1f5f9',
  },
  reviewerName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text.primary,
  },
  reviewMeta: {
    fontSize: 11,
    color: colors.text.secondary,
    marginTop: 2,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 2,
  },
  reviewComment: {
    fontSize: 14,
    color: colors.text.slate,
    lineHeight: 20,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 15,
  },
  tagPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(74, 124, 255, 0.2)',
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primary,
  },
  endText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 25,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
});

export default ReputationScreen;
