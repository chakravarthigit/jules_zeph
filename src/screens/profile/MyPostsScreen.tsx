import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../theme';
import { EventCard } from '../../components/EventCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyPostsScreen = ({ navigation }: any) => {
  const MOCK_POSTS = [
    { id: '1', title: 'Downtown Cleanup', host: 'Sarah J.', time: 'Tomorrow', distance: '0.1 mi', category: 'Community' },
    { id: '2', title: 'Lost Keys found', host: 'Sarah J.', time: '2h ago', distance: 'The Docks', category: 'Help' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={32} color={colors.text.secondary} />
        </TouchableOpacity>
        <Text style={styles.title}>My Posts</Text>
        <View style={{ width: 32 }} />
      </View>

      <FlatList
        data={MOCK_POSTS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <EventCard
            title={item.title}
            host={item.host}
            time={item.time}
            distance={item.distance}
            category={item.category}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  list: {
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
});

export default MyPostsScreen;
