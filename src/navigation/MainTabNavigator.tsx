import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import HomeScreen from '../screens/main/HomeScreen';
import DiscoverScreen from '../screens/main/DiscoverScreen';
import CreatePostScreen from '../screens/main/CreatePostScreen';
import ActivityScreen from '../screens/main/ActivityScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import CalendarScreen from '../screens/main/CalendarScreen';
import { colors } from '../theme';
import { ClayView } from '../components/ClayView';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator<MainTabParamList>();

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const TabItem = ({ route, index, isFocused, navigation }: any) => {
  const scale = useSharedValue(1);
  const tabWidth = useSharedValue(isFocused ? 60 : 40);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value) }],
    width: withSpring(tabWidth.value),
  }));

  React.useEffect(() => {
    tabWidth.value = isFocused ? 60 : 40;
  }, [isFocused, tabWidth]);

  const onPress = () => {
    navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused) navigation.navigate(route.name);
  };

  const getIconName = (name: string) => {
    switch(name) {
      case 'Home': return 'home';
      case 'Discover': return 'explore';
      case 'Activity': return 'notifications';
      case 'Calendar': return 'calendar-today';
      case 'Profile': return 'person';
      default: return 'help';
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      onPressIn={() => (scale.value = 0.9)}
      onPressOut={() => (scale.value = 1)}
      style={styles.tabItem}
    >
      <Animated.View style={[styles.tabContent, animatedStyle, isFocused && styles.activeTabBg]}>
        <Icon
          name={getIconName(route.name)}
          size={24}
          color={isFocused ? 'white' : colors.clay.gray}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const CreateTabItem = ({ route, navigation, isFocused }: any) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value) }]
  }));

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <TouchableOpacity
      key={route.name}
      activeOpacity={0.9}
      onPress={onPress}
      onPressIn={() => (scale.value = 1.1)}
      onPressOut={() => (scale.value = 1)}
      style={styles.fabContainer}
    >
      <Animated.View style={[styles.fab, animatedStyle]}>
         <Icon name="add" size={32} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
};

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBarContainer}>
      <ClayView style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;

          if (route.name === 'Create') {
            return (
              <CreateTabItem
                key={route.name}
                route={route}
                navigation={navigation}
                isFocused={isFocused}
              />
            );
          }

          return (
            <TabItem
              key={route.name}
              route={route}
              index={index}
              isFocused={isFocused}
              navigation={navigation}
            />
          );
        })}
      </ClayView>
    </View>
  );
};

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Create" component={CreatePostScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tabBar: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContent: {
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabBg: {
    backgroundColor: colors.primary,
  },
  fabContainer: {
    top: -20,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  plusIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'white', // Placeholder for actual icon
  }
});
