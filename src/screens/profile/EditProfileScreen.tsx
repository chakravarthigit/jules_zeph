import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInRight } from 'react-native-reanimated';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditProfile'>;
}

const EditProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('Sarah Jenkins');
  const [bio, setBio] = useState('Coffee enthusiast, local explorer, and weekend hiker. Always looking for the best hidden spots in the city! ☕🌲');
  const [location, setLocation] = useState('Portland, OR');
  const [interests, setInterests] = useState(['Hiking', 'Photography', 'Coffee', 'Art', 'Music']);

  return (
    <View style={styles.container}>
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ClayView style={styles.backBtnInner}>
              <Icon name="chevron-left" size={28} color={colors.text.slate} />
            </ClayView>
          </TouchableOpacity>
          <Text style={styles.title}>Edit Profile</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <ClayView style={styles.avatarClay}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9JDoaBlEgzX6pRj_Sk1IkUSQB2riqSDmjKOyLlyXH79a4jzD3XuAr4A3SZgh9yGqygEsmraLK3RO5BwM5AH2T6mBn0_R7M1pux-Ma7Ltlk0lL9EAsb_LDSMpM-oO3__7e1HjY0PXaaGY-HXaaSda5hXElOF2zcUZt8jhTTWvVb_DKGxgtqZJQLAMAqfCpgcRhgAUhR12JdX4sQbz6y6PYHAm2_x3Gdd2g-CTukgkE7e6pXVMie868POsv9uy31Ed8VTFbqXMRTog' }}
                style={styles.avatar}
              />
            </ClayView>
            <TouchableOpacity style={styles.editBadge}>
              <Icon name="edit" size={18} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.changePhotoText}>Change Photo</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>FULL NAME</Text>
            <ClayView inset style={styles.inputContainer}>
              <Icon name="person-outline" size={24} color="#94a3b8" />
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Your Name"
              />
            </ClayView>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>BIO</Text>
            <ClayView inset style={[styles.inputContainer, styles.textAreaContainer]}>
              <Icon name="format-quote" size={24} color="#94a3b8" style={{ marginTop: 2 }} />
              <TextInput
                style={[styles.input, styles.textArea]}
                value={bio}
                onChangeText={setBio}
                multiline
                placeholder="Tell us about yourself..."
              />
            </ClayView>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>LOCATION</Text>
            <ClayView inset style={styles.inputContainer}>
              <Icon name="location-on" size={24} color="#94a3b8" />
              <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholder="City, Region"
              />
              <Icon name="my-location" size={24} color={colors.primary} />
            </ClayView>
          </View>

          <View style={styles.interestsSection}>
            <View style={styles.interestsHeader}>
              <Text style={styles.label}>INTERESTS</Text>
              <TouchableOpacity style={styles.addButton}>
                <Icon name="add" size={16} color={colors.primary} />
                <Text style={styles.addButtonText}>ADD</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.interestsScroll}>
              {interests.map((interest, index) => (
                <Animated.View key={interest} entering={FadeInRight.delay(index * 100)}>
                  <ClayView
                    style={styles.interestPill}
                    color={index < 2 ? colors.primary : 'white'}
                  >
                    <Text style={[styles.interestText, index < 2 && styles.selectedInterestText]}>#{interest}</Text>
                    <Icon name="close" size={14} color={index < 2 ? 'rgba(255,255,255,0.6)' : '#94a3b8'} />
                  </ClayView>
                </Animated.View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.updateButton} onPress={() => navigation.goBack()}>
          <Icon name="check" size={24} color="white" />
          <Text style={styles.updateButtonText}>Update Profile</Text>
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
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  backButton: {
    width: 44,
    height: 44,
  },
  backBtnInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text.primary,
    letterSpacing: -0.5,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarWrapper: {
    width: 140,
    height: 140,
    position: 'relative',
  },
  avatarClay: {
    width: 140,
    height: 140,
    borderRadius: 70,
    padding: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  editBadge: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.background.light,
  },
  changePhotoText: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  form: {
    gap: 25,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94a3b8',
    letterSpacing: 1.5,
    marginLeft: 15,
  },
  inputContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 12,
  },
  textAreaContainer: {
    height: 120,
    alignItems: 'flex-start',
    paddingTop: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  textArea: {
    textAlignVertical: 'top',
    height: '100%',
  },
  interestsSection: {
    gap: 12,
  },
  interestsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addButtonText: {
    fontSize: 10,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: 1,
  },
  interestsScroll: {
    gap: 12,
    paddingRight: 20,
  },
  interestPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
  },
  interestText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.slate,
  },
  selectedInterestText: {
    color: 'white',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    paddingHorizontal: 25,
  },
  updateButton: {
    backgroundColor: colors.primary,
    height: 64,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default EditProfileScreen;
