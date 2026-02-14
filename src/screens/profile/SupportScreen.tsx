import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';

const SupportScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
    <Text style={styles.title}>Help & Support</Text>
    <Text style={styles.text}>Need help? Reach out to us at support@zeph.app or visit our community forums.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: colors.background.light, paddingTop: 60 },
  back: { fontSize: 16, color: colors.primary, marginBottom: 30, fontWeight: 'bold' },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.text.primary, marginBottom: 20 },
  text: { fontSize: 16, lineHeight: 24, color: colors.text.secondary }
});

export default SupportScreen;
