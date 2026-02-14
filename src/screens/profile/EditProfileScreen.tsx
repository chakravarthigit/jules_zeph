import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { ProfileAvatar } from '../../components/ProfileAvatar';
import { GradientButton } from '../../components/GradientButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EditProfileScreen = ({ navigation }: any) => {
  const [name, setName] = useState('Sarah Jenkins');
  const [bio, setBio] = useState('Community gardener 🌻 & local coffee enthusiast.');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={32} color={colors.text.secondary} />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={{ width: 32 }} />
      </View>

      <View style={styles.avatarSection}>
        <ProfileAvatar size={100} />
        <TouchableOpacity><Text style={styles.changePhoto}>Change Photo</Text></TouchableOpacity>
      </View>

      <ClayView style={styles.formCard}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>FULL NAME</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>BIO</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            value={bio}
            onChangeText={setBio}
            multiline
          />
        </View>
      </ClayView>

      <GradientButton
        title="Save Changes"
        onPress={() => navigation.goBack()}
        style={styles.saveBtn}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  content: {
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  backBtn: {
    fontSize: 24,
    color: colors.text.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  changePhoto: {
    marginTop: 12,
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  formCard: {
    padding: 24,
    borderRadius: 30,
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.secondary,
    marginBottom: 8,
    letterSpacing: 1,
  },
  input: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 8,
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  saveBtn: {
    width: '100%',
  },
});

export default EditProfileScreen;
