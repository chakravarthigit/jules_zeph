import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ClayView } from '../../components/ClayView';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Svg, { Path, Rect, LinearGradient, Stop, Defs } from 'react-native-svg';
import Animated, { FadeInDown } from 'react-native-reanimated';

const UserActivityInsightsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Icon name="arrow-back" size={24} color={colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity Insights</Text>
        <TouchableOpacity style={styles.moreBtn}>
          <Icon name="more-horiz" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Animated.View entering={FadeInDown}>
          <ClayView style={styles.statCard}>
            <Text style={styles.statLabel}>Total Contributions</Text>
            <Text style={styles.statValue}>1,284</Text>
            <View style={styles.trendRow}>
              <Icon name="trending-up" size={16} color="#10B981" />
              <Text style={styles.trendText}>+12.5% from last month</Text>
            </View>
          </ClayView>
        </Animated.View>

        <Text style={styles.sectionTitle}>Activity Growth</Text>
        <Animated.View entering={FadeInDown.delay(100)}>
          <ClayView style={styles.chartCard}>
            <View style={styles.chartHeader}>
              <Text style={styles.chartTitle}>Monthly Views</Text>
              <View style={styles.periodBadge}>
                <Text style={styles.periodText}>Last 6 Months</Text>
              </View>
            </View>
            <View style={styles.svgContainer}>
              <Svg height="150" width="300">
                <Defs>
                  <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0" stopColor={colors.primary} stopOpacity="0.2" />
                    <Stop offset="1" stopColor={colors.primary} stopOpacity="0" />
                  </LinearGradient>
                </Defs>
                <Path
                  d="M0,120 Q50,100 100,80 T200,40 T300,60"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="3"
                />
                <Path
                  d="M0,120 Q50,100 100,80 T200,40 T300,60 L300,150 L0,150 Z"
                  fill="url(#grad)"
                />
              </Svg>
            </View>
            <View style={styles.xAxis}>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m) => (
                <Text key={m} style={styles.xLabel}>{m}</Text>
              ))}
            </View>
          </ClayView>
        </Animated.View>

        <Text style={styles.sectionTitle}>Interactions</Text>
        <Animated.View entering={FadeInDown.delay(200)}>
          <ClayView style={styles.chartCard}>
            <View style={styles.barChart}>
              {[60, 80, 45, 90, 70, 55].map((h, i) => (
                <View key={i} style={styles.barWrapper}>
                  <View style={[styles.bar, { height: h, backgroundColor: i % 2 === 0 ? colors.primary : colors.accents.coralPunch }]} />
                  <Text style={styles.xLabel}>D{i+1}</Text>
                </View>
              ))}
            </View>
          </ClayView>
        </Animated.View>

        <Text style={styles.sectionTitle}>Top Interests</Text>
        <Animated.View entering={FadeInDown.delay(300)}>
          <ClayView style={styles.interestsCard}>
            {[
              { label: 'Community Events', val: 0.85, color: colors.primary },
              { label: 'Local Food', val: 0.65, color: colors.accents.coralPunch },
              { label: 'Outdoor Activities', val: 0.45, color: '#10B981' },
            ].map((item, i) => (
              <View key={i} style={styles.interestRow}>
                <View style={styles.interestInfo}>
                  <Text style={styles.interestLabel}>{item.label}</Text>
                  <Text style={styles.interestPercent}>{Math.round(item.val * 100)}%</Text>
                </View>
                <View style={styles.progressBg}>
                  <View style={[styles.progressFill, { width: `${item.val * 100}%`, backgroundColor: item.color }]} />
                </View>
              </View>
            ))}
          </ClayView>
        </Animated.View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text.primary,
  },
  moreBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  statCard: {
    padding: 25,
    borderRadius: 30,
    backgroundColor: 'white',
    marginBottom: 25,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 36,
    fontWeight: '900',
    color: colors.text.primary,
    marginBottom: 8,
  },
  trendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  trendText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#10B981',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.text.primary,
    marginBottom: 15,
    marginTop: 10,
  },
  chartCard: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    marginBottom: 25,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text.primary,
  },
  periodBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#f1f5f9',
  },
  periodText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.text.secondary,
  },
  svgContainer: {
    height: 150,
    width: '100%',
    alignItems: 'center',
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  xLabel: {
    fontSize: 10,
    color: colors.text.secondary,
    fontWeight: '600',
  },
  barChart: {
    flexDirection: 'row',
    height: 120,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  barWrapper: {
    alignItems: 'center',
    gap: 10,
  },
  bar: {
    width: 25,
    borderRadius: 6,
  },
  interestsCard: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    gap: 20,
  },
  interestRow: {
    gap: 10,
  },
  interestInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  interestLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text.primary,
  },
  interestPercent: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primary,
  },
  progressBg: {
    height: 10,
    backgroundColor: '#f1f5f9',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
  }
});

export default UserActivityInsightsScreen;
