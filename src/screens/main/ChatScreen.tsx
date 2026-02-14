import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '../../theme';
import { ClayView } from '../../components/ClayView';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { FadeInUp, FadeInDown, FadeIn } from 'react-native-reanimated';

const MESSAGES = [
  {
    id: '1',
    user: 'Sarah',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAewfCYYvCPTdcntOPuGdYGAzEzEHcTq6EOVlIVXPI6tAwEGgdnZwl-a0aBdVZGWdmXWijifbhHRXrZnPRF7n631Uhbyjfmis3XONN9vp4ZigqqblZ3l7m5_GoFYCK1AnpmE5b5TQCg4uloDSaLA0AfIJbGVaj-MtWbpVGvIGS19Z2bWKgOTuJ0k5wDZhnk47xocUO2taRtYn59ExUwzR8pXzBuovNvrcEaEPpj-LdfgDytfM_jihhwezrLlPBWSVxyxo8NWNA0lHM',
    text: 'Is anyone bringing an extra mat? Mine ripped 😅',
    time: '10:02 AM',
    isMe: false
  },
  {
    id: '2',
    user: 'Mike',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHjnxWyA4tL1gc1rInjg6jENuTO2mREp_zAZi7BRxCvWd5_OcIyAmShBUmYRO9iciZjGDth8eio7k-iPsZM6gSFkNYGDXSqfZuJIFTi36FykWDCMfeQ9HuWXbo18wSo7w5IKRBxgHjvRiwxHmEzbGVDFIxSOS0-gdYo6D-VnN2J2CaQTp0o94BsFthU12tUqoaxe6rYKHsWMKv5r9Ziw6oV-MU-nTt3RbsJyK0mLN9BBRW0e6JRFQxk0nNmZKmYLRBgq76ZynMnIc',
    text: "I'll have one! I'll be there in 5 mins.",
    time: '10:03 AM',
    isMe: false,
    reactions: [{ emoji: '❤️', count: 2 }]
  },
  {
    id: '3',
    text: "Great, see you both there! I'm grabbing coffee on the way. Anyone want one? ☕️",
    time: '10:04 AM',
    isMe: true
  },
  {
    id: '4',
    user: 'Jessica',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfRw16r-PbW5J87tAl_lQJaKdunqfCFIPYpxZ4iTI7AdzmcXMcgxjVEX7WuFjr9uXBpMGuFEG47dM25L59W3DZI9B663ANt6StvMKV31M8RGgtlUcV3CN_HXuAo_pS_IBwoICAvMLT2T9hyJrctFqVKXoNDFXcl68nIySXMWAUPYmOeS2Z6vUGIFND3kBa3QQqmGhbM9rT4JQZGSXeukX_mbd2sXZC-a9u6kKigbeXlVENAECjPAaJJizcV8T6vQejVAeOvFMVcBU',
    text: 'Ooh yes please! Iced latte w/ oat milk? 🙏',
    time: '10:05 AM',
    isMe: false
  }
];

const ChatScreen = ({ navigation }: any) => {
  const [text, setText] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.blob1} />
      <View style={styles.blob2} />

      <View style={styles.header}>
        <ClayView style={styles.headerCard}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Icon name="arrow-back-ios" size={20} color={colors.text.secondary} />
            </TouchableOpacity>
            <View style={styles.eventInfo}>
              <View style={styles.avatarWrapper}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACjo6dQ7LJTAZGE_2ilD8GhtFiOgNEAwr4T3tkz9NCs66X3qrEfW0RAItCauQIMmHz9ErVuReuUNPT5qizjSQ6yTx4qkcPVOPAZGJaX4bSGy61CT7Uv6K8DjwS06ocqDUPDSPjY67glEFPLyCKrC5u2I4yqkaTRhHyIthgSz6Qj95FBS_4pYE3u9yrw8CokFnis0h3RzRm8B1boXBesxv4jJznbOjPy9L-Nsc30QWloaDzoBCvalnHF9yln4S17MT40yD1s3nSRt0' }}
                  style={styles.eventThumb}
                />
                <View style={styles.onlineIndicator} />
              </View>
              <View>
                <Text style={styles.eventName}>Sunset Yoga</Text>
                <Text style={styles.chatStats}>12 people chatting</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <Icon name="more-vert" size={24} color={colors.text.secondary} />
          </TouchableOpacity>
        </ClayView>
      </View>

      <ScrollView
        contentContainerStyle={styles.chatArea}
        showsVerticalScrollIndicator={false}
        ref={(ref) => ref?.scrollToEnd({ animated: true })}
      >
        <View style={styles.dateDivider}>
          <View style={styles.dividerPill}>
            <Text style={styles.dateText}>TODAY</Text>
          </View>
        </View>

        {MESSAGES.map((msg, index) => (
          <Animated.View
            key={msg.id}
            entering={msg.isMe ? FadeInUp.delay(index * 100) : FadeInDown.delay(index * 100)}
            style={[styles.messageGroup, msg.isMe && styles.myMessageGroup]}
          >
            {!msg.isMe && (
              <Image source={{ uri: msg.avatar }} style={styles.userAvatar} />
            )}
            <View style={[styles.bubbleWrapper, msg.isMe && styles.myBubbleWrapper]}>
              {!msg.isMe && <Text style={styles.messageMeta}>{msg.user} • {msg.time}</Text>}
              {msg.isMe && <Text style={styles.messageMeta}>{msg.time}</Text>}

              <ClayView
                style={[styles.bubble, msg.isMe ? styles.myBubble : styles.otherBubble]}
                color={msg.isMe ? colors.primary : undefined}
                inset={!msg.isMe}
              >
                <Text style={[styles.messageText, msg.isMe && styles.myMessageText]}>
                  {msg.text}
                </Text>
                {msg.reactions && (
                  <View style={styles.reactionPill}>
                    <Text style={styles.reactionEmoji}>{msg.reactions[0].emoji}</Text>
                    <Text style={styles.reactionCount}>{msg.reactions[0].count}</Text>
                  </View>
                )}
              </ClayView>
            </View>
          </Animated.View>
        ))}
      </ScrollView>

      <View style={styles.composeBar}>
        <View style={styles.composeInner}>
          <TouchableOpacity style={styles.emojiButton}>
            <ClayView style={styles.emojiBtnInner} color="white">
              <Icon name="emoji-emotions" size={24} color={colors.text.secondary} />
            </ClayView>
          </TouchableOpacity>

          <ClayView inset style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Say something..."
              placeholderTextColor="#94a3b8"
              value={text}
              onChangeText={setText}
            />
          </ClayView>

          <TouchableOpacity style={styles.sendButton}>
            <View style={styles.sendBtnInner}>
              <Icon name="send" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.safeAreaBar} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
  blob1: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(74, 124, 255, 0.1)',
  },
  blob2: {
    position: 'absolute',
    bottom: 100,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 15,
    zIndex: 10,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 50,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarWrapper: {
    position: 'relative',
  },
  eventThumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.status.success,
    borderWidth: 2,
    borderColor: 'white',
  },
  eventName: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.text.primary,
  },
  chatStats: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.primary,
  },
  moreButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatArea: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 120,
  },
  dateDivider: {
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerPill: {
    backgroundColor: 'rgba(226, 232, 240, 0.5)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 15,
  },
  dateText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94a3b8',
    letterSpacing: 1,
  },
  messageGroup: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    marginBottom: 20,
    maxWidth: '85%',
  },
  myMessageGroup: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'white',
  },
  bubbleWrapper: {
    gap: 4,
  },
  myBubbleWrapper: {
    alignItems: 'flex-end',
  },
  messageMeta: {
    fontSize: 10,
    fontWeight: '600',
    color: '#94a3b8',
    marginLeft: 10,
  },
  bubble: {
    padding: 16,
    borderRadius: 24,
    minWidth: 60,
  },
  otherBubble: {
    borderBottomLeftRadius: 4,
  },
  myBubble: {
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 14,
    color: colors.text.slate,
    lineHeight: 20,
  },
  myMessageText: {
    color: 'white',
    fontWeight: '500',
  },
  reactionPill: {
    position: 'absolute',
    bottom: -12,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  reactionEmoji: {
    fontSize: 12,
  },
  reactionCount: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.text.secondary,
  },
  composeBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(245, 246, 248, 0.8)',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  composeInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  emojiButton: {
    width: 44,
    height: 44,
  },
  emojiBtnInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  input: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: '500',
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  sendBtnInner: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
  },
  safeAreaBar: {
    width: 100,
    height: 5,
    backgroundColor: '#cbd5e1',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 5,
  },
});

export default ChatScreen;
