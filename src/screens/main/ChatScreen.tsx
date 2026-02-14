import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { colors, typography } from '../../theme';
import { ClayView } from '../../components/ClayView';
import { ProfileAvatar } from '../../components/ProfileAvatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ClayView style={styles.headerCard}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-ios" size={20} color={colors.text.secondary} />
          </TouchableOpacity>
          <View style={styles.eventInfo}>
             <ProfileAvatar size={40} />
             <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Sunset Yoga</Text>
                <Text style={styles.chatStatus}>12 people chatting</Text>
             </View>
          </View>
          <TouchableOpacity>
             <Icon name="more-vert" size={24} color={colors.text.secondary} />
          </TouchableOpacity>
        </ClayView>
      </View>

      <ScrollView contentContainerStyle={styles.chatArea} showsVerticalScrollIndicator={false}>
         <View style={styles.dateDivider}>
            <ClayView style={styles.dateBadge} inset>
               <Text style={styles.dateText}>TODAY</Text>
            </ClayView>
         </View>

         {/* Incoming Message */}
         <View style={styles.msgInRow}>
            <ProfileAvatar size={32} />
            <View style={styles.msgInCol}>
               <Text style={styles.msgMeta}>Sarah • 10:02 AM</Text>
               <ClayView style={styles.msgInBubble}>
                  <Text style={styles.msgInText}>Is anyone bringing an extra mat? Mine ripped 😅</Text>
               </ClayView>
            </View>
         </View>

         {/* Outgoing Message */}
         <View style={styles.msgOutRow}>
            <View style={styles.msgOutCol}>
               <Text style={styles.msgMetaOut}>10:04 AM</Text>
               <ClayView style={styles.msgOutBubble}>
                  <Text style={styles.msgOutText}>Great, see you both there! I'm grabbing coffee on the way. Anyone want one? ☕️</Text>
               </ClayView>
            </View>
         </View>

         {/* Incoming Message with Reaction */}
         <View style={styles.msgInRow}>
            <ProfileAvatar size={32} />
            <View style={styles.msgInCol}>
               <Text style={styles.msgMeta}>Mike • 10:03 AM</Text>
               <ClayView style={styles.msgInBubble}>
                  <Text style={styles.msgInText}>I have one! I'll be there in 5 mins.</Text>
                  <View style={styles.reactionPill}>
                     <Text style={styles.reactionText}>❤️ 2</Text>
                  </View>
               </ClayView>
            </View>
         </View>
      </ScrollView>

      <View style={styles.inputArea}>
         <View style={styles.inputRow}>
            <TouchableOpacity style={styles.emojiBtn}>
               <Icon name="sentiment-satisfied" size={24} color={colors.text.secondary} />
            </TouchableOpacity>
            <View style={styles.textInputWrapper}>
               <TextInput
                  style={styles.textInput}
                  placeholder="Say something..."
                  placeholderTextColor={colors.clay.gray}
               />
            </View>
            <TouchableOpacity style={styles.sendBtn}>
               <Icon name="send" size={20} color="white" />
            </TouchableOpacity>
         </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 10,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  backBtn: {
    fontSize: 32,
    color: colors.text.secondary,
    paddingHorizontal: 10,
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleContainer: {
    marginLeft: 12,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  chatStatus: {
    fontSize: 10,
    color: colors.primary,
    fontWeight: '600',
  },
  moreBtn: {
    fontSize: 24,
    color: colors.text.secondary,
    paddingHorizontal: 10,
  },
  chatArea: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  dateDivider: {
    alignItems: 'center',
    marginBottom: 30,
  },
  dateBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 15,
  },
  dateText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.clay.gray,
    letterSpacing: 1,
  },
  msgInRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  msgInCol: {
    marginLeft: 10,
    maxWidth: '75%',
  },
  msgMeta: {
    fontSize: 10,
    color: colors.text.secondary,
    marginBottom: 4,
    marginLeft: 8,
  },
  msgInBubble: {
    padding: 16,
    borderRadius: 20,
    borderBottomLeftRadius: 4,
    backgroundColor: 'white',
  },
  msgInText: {
    fontSize: 14,
    color: colors.text.primary,
    lineHeight: 20,
  },
  msgOutRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  msgOutCol: {
    maxWidth: '80%',
    alignItems: 'flex-end',
  },
  msgMetaOut: {
    fontSize: 10,
    color: colors.text.secondary,
    marginBottom: 4,
    marginRight: 8,
  },
  msgOutBubble: {
    padding: 16,
    borderRadius: 20,
    borderBottomRightRadius: 4,
    backgroundColor: colors.primary,
  },
  msgOutText: {
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
  },
  reactionPill: {
    position: 'absolute',
    bottom: -10,
    right: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reactionText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.text.secondary,
  },
  inputArea: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(245, 246, 248, 0.8)',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emojiBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  textInputWrapper: {
    flex: 1,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 22,
    marginHorizontal: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  textInput: {
    fontSize: 14,
    color: colors.text.primary,
  },
  sendBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  sendIcon: {
    color: 'white',
    fontSize: 20,
    marginLeft: 4,
  },
});

export default ChatScreen;
