import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const CreatePostScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.sheet}>
        <View style={styles.dragHandle} />
        <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
           <Icon name="close" size={24} color={colors.text.secondary} />
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.headerLabel}>CREATE NEW POST</Text>

          <ClayView style={styles.inputCard}>
            <Icon name="edit" size={20} color={colors.primary} style={{ marginRight: 12 }} />
            <TextInput
              style={styles.input}
              placeholder="What's happening?"
              placeholderTextColor={colors.clay.gray}
              multiline
            />
          </ClayView>

          <View style={styles.grid}>
            <TouchableOpacity style={styles.cardWrapper}>
              <ClayView style={[styles.optionCard, { backgroundColor: colors.accents.coral }]}>
                <Text style={styles.cardEmoji}>🎉</Text>
                <Text style={styles.cardTitle}>Host an{'\n'}Event</Text>
              </ClayView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardWrapper}>
              <ClayView style={[styles.optionCard, { backgroundColor: colors.accents.mint }]}>
                <Text style={styles.cardEmoji}>🤝</Text>
                <Text style={[styles.cardTitle, { color: '#065f46' }]}>Ask for{'\n'}Help</Text>
              </ClayView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardWrapper}>
              <ClayView style={[styles.optionCard, { backgroundColor: colors.accents.lavender }]}>
                <Text style={styles.cardEmoji}>🛠</Text>
                <Text style={[styles.cardTitle, { color: '#4338ca' }]}>Offer a{'\n'}Service</Text>
              </ClayView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardWrapper}>
              <ClayView style={[styles.optionCard, { backgroundColor: colors.accents.yellow }]}>
                <Text style={styles.cardEmoji}>📣</Text>
                <Text style={[styles.cardTitle, { color: '#92400e' }]}>Share a{'\n'}Moment</Text>
              </ClayView>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  sheet: {
    height: height * 0.9,
    backgroundColor: colors.background.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
  },
  dragHandle: {
    width: 60,
    height: 6,
    backgroundColor: '#ddd',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 20,
  },
  closeBtn: {
    position: 'absolute',
    top: 24,
    right: 24,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  closeIcon: {
    fontSize: 18,
    color: colors.text.secondary,
  },
  content: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  headerLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.secondary,
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 30,
  },
  inputCard: {
    borderRadius: 25,
    padding: 20,
    minHeight: 80,
    marginBottom: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '47%',
    aspectRatio: 1,
    marginBottom: 20,
  },
  optionCard: {
    flex: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cardEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default CreatePostScreen;
