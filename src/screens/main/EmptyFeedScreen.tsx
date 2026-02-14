import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ClayView } from '../../components/ClayView';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const EmptyFeedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View entering={FadeInDown}>
          <ClayView style={styles.iconContainer}>
            <Icon name="rss-feed" size={64} color={colors.primary} />
          </ClayView>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100)} style={styles.textContainer}>
          <Text style={styles.title}>Your feed is quiet</Text>
          <Text style={styles.subtitle}>
            Follow some neighbors or join local groups to see what's happening around you.
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)} style={styles.btnWrapper}>
          <TouchableOpacity style={styles.btn}>
            <ClayView style={styles.btnInner}>
              <Text style={styles.btnText}>Explore Neighborhood</Text>
            </ClayView>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.text.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  btnWrapper: {
    width: '100%',
  },
  btn: {
    width: '100%',
    height: 60,
  },
  btnInner: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  }
});

export default EmptyFeedScreen;
