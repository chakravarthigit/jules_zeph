import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { ProfileAvatar } from '../../components/ProfileAvatar';
import { useStore } from '../../store/useStore';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = ({ navigation }: any) => {
  const logout = useStore(state => state.logout);

  const SettingItem = ({ icon, label, onPress, right }: any) => (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <ClayView style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <View style={styles.iconWrapper}>
            <Icon name={icon} size={20} color={colors.primary} />
          </View>
          <Text style={styles.settingLabel}>{label}</Text>
        </View>
        {right || <Icon name="chevron-right" size={24} color={colors.clay.gray} />}
      </ClayView>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
               <Icon name="chevron-left" size={32} color={colors.text.secondary} />
            </TouchableOpacity>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>Manage your ZEPH experience</Text>
          </View>
          <ProfileAvatar size={56} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>GENERAL</Text>
          <SettingItem icon="person" label="Account" onPress={() => navigation.navigate('EditProfile')} />
          <SettingItem
            icon="notifications"
            label="Notifications"
            right={<Switch value={true} trackColor={{ true: colors.primary }} />}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SECURITY & SUPPORT</Text>
          <SettingItem icon="security" label="Privacy & Safety" onPress={() => navigation.navigate('Privacy')} />
          <SettingItem icon="near-me" label="Location Data" onPress={() => {}} />
          <SettingItem icon="help-outline" label="Help & Support" onPress={() => navigation.navigate('Support')} />
        </View>

        <View style={styles.versionInfo}>
          <Text style={styles.versionText}>ZEPH v2.4.0 (Build 3902)</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Icon name="logout" size={20} color="white" style={{ marginRight: 10 }} />
          <Text style={styles.logoutText}>Log Out</Text>
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
  content: {
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  backBtn: {
    marginBottom: 10,
  },
  backIcon: {
    fontSize: 24,
    color: colors.text.secondary,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    fontWeight: '500',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.secondary,
    marginLeft: 16,
    marginBottom: 12,
    letterSpacing: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 25,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(77, 127, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingIcon: {
    fontSize: 18,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  chevron: {
    fontSize: 18,
    color: colors.clay.gray,
  },
  versionInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  versionText: {
    fontSize: 10,
    color: colors.clay.gray,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 25,
    right: 25,
  },
  logoutBtn: {
    backgroundColor: colors.accents.coral,
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.accents.coral,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  logoutIcon: {
    fontSize: 20,
    color: 'white',
    marginRight: 10,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SettingsScreen;
