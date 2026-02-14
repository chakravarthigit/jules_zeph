import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';

const PrivacyScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
    <Text style={styles.title}>Privacy & Safety</Text>
    <Text style={styles.text}>Your data is safe with us. We use end-to-end encryption for all your local chats and never share your precise location without your consent.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: colors.background.light, paddingTop: 60 },
  back: { fontSize: 16, color: colors.primary, marginBottom: 30, fontWeight: 'bold' },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.text.primary, marginBottom: 20 },
  text: { fontSize: 16, lineHeight: 24, color: colors.text.secondary }
});

export default PrivacyScreen;
