import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MyPosts'>;
}

const POSTS = [
  {
    id: '1',
    type: 'Live Now',
    title: 'Sunset Yoga at The Park',
    description: 'Join us for a relaxing evening session near the fountain. Bring your own mat!',
    views: 124,
    participants: 18,
    time: '2m ago',
    color: colors.primary,
    pulse: true
  },
  {
    id: '2',
    type: 'Scheduled',
    title: 'Saturday Community Clean-up',
    description: 'Help us keep our neighborhood clean. Meeting point: Central Library entrance.',
    views: 342,
    participants: 45,
    time: 'Sat, 10:00 AM',
    color: '#f59e0b',
    icon: 'event'
  },
  {
    id: '3',
    type: 'Discussion',
    title: 'Best Pizza in Downtown?',
    description: 'Looking for recommendations for a thin crust pizza place open late tonight.',
    views: 89,
    participants: 12,
    time: '4h ago',
    color: '#8b5cf6',
    icon: 'forum',
    isChat: true
  },
  {
    id: '4',
    type: 'Alert',
    title: 'Lost Keys',
    description: 'Dropped my keys near the bakery this morning. Has a red keychain.',
    views: 210,
    time: '8h ago',
    color: colors.accents.coralPunch,
    icon: 'priority-high'
  }
];

const MyPostsScreen: React.FC<Props> = ({ navigation }) => {
  const [activeFilter, setActiveFilter] = useState('Active');

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Icon name="chevron-left" size={36} color={colors.text.slate} />
            </TouchableOpacity>
            <Text style={styles.title}>My Posts</Text>
          </View>
          <View style={styles.profileThumbnail}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9iMl8CnUyYnYY87JauTyP3TkQko-FZD8sQRQpxR4b6BGw4MNHiJMiHaq60STeQ8TsAQnIhNF_8LJbW737h3pyBKb6qiIfTwuUgZkUksNJ5potQDzeG_bZ_EFv7h3dTiKRSVetqQ2pQJXT4Khm6-R7MrfH96fE2D19BvaPEvf_PXi1mndI8y-x5xktVLkl3URu6c4NgPbQigzNIxsyIM0hE3LSQJ41FjFK7qlg8AyEsrF2oJ5gEWFzouLieGjUoxIAGdSvrCQXb3s' }}
              style={styles.avatar}
            />
            <View style={styles.onlineStatus} />
          </View>
        </View>

        <ClayView inset style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeFilter === 'Active' && styles.activeTab]}
            onPress={() => setActiveFilter('Active')}
          >
            <Text style={[styles.tabText, activeFilter === 'Active' && styles.activeTabText]}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeFilter === 'Past' && styles.activeTab]}
            onPress={() => setActiveFilter('Past')}
          >
            <Text style={[styles.tabText, activeFilter === 'Past' && styles.activeTabText]}>Past</Text>
          </TouchableOpacity>
        </ClayView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.postList}>
          {POSTS.map((post, index) => (
            <Animated.View key={post.id} entering={FadeInDown.delay(index * 150)}>
              <ClayView style={styles.postCard}>
                <View style={styles.postCardHeader}>
                  <View style={[styles.typeBadge, { backgroundColor: `${post.color}15` }]}>
                    {post.pulse && <View style={[styles.pulseDot, { backgroundColor: post.color }]} />}
                    {post.icon && <Icon name={post.icon} size={12} color={post.color} style={{ marginRight: 4 }} />}
                    <Text style={[styles.typeText, { color: post.color }]}>{post.type}</Text>
                  </View>
                  <TouchableOpacity>
                    <Icon name="more-horiz" size={24} color="#cbd5e1" />
                  </TouchableOpacity>
                </View>

                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postDescription} numberOfLines={2}>{post.description}</Text>

                <View style={styles.postFooter}>
                  <View style={styles.metrics}>
                    <ClayView style={styles.metricBadge} color={colors.background.light}>
                      <Icon name="visibility" size={14} color="#94a3b8" />
                      <Text style={styles.metricValue}>{post.views}</Text>
                    </ClayView>
                    {post.participants && (
                      <ClayView style={styles.metricBadge} color={colors.background.light}>
                        <Icon name={post.isChat ? "chat-bubble" : "group"} size={14} color={colors.primary} />
                        <Text style={styles.metricValue}>{post.participants}</Text>
                      </ClayView>
                    )}
                  </View>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
              </ClayView>
            </Animated.View>
          ))}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={32} color="white" />
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
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  backButton: {
    marginLeft: -10,
    marginBottom: 5,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.text.primary,
    letterSpacing: -1,
  },
  profileThumbnail: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 27,
  },
  onlineStatus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.status.success,
    borderWidth: 2,
    borderColor: colors.background.light,
  },
  tabBar: {
    height: 60,
    flexDirection: 'row',
    borderRadius: 30,
    padding: 6,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
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
    fontSize: 15,
    fontWeight: '700',
    color: colors.text.secondary,
  },
  activeTabText: {
    color: 'white',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  postList: {
    gap: 20,
  },
  postCard: {
    padding: 24,
    borderRadius: 32,
  },
  postCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  typeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  typeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  postTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text.primary,
    marginBottom: 6,
  },
  postDescription: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 22,
    marginBottom: 20,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metrics: {
    flexDirection: 'row',
    gap: 12,
  },
  metricBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  metricValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.text.slate,
  },
  postTime: {
    fontSize: 12,
    color: colors.text.secondary,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: 40,
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

export default MyPostsScreen;
