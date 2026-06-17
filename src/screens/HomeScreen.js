import { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import { layout, spacing } from '../theme';
import { user, quickActions, recentTransactions } from '../data/mockData';
import QuickAction from '../components/QuickAction';
import VirtualCard from '../components/VirtualCard';
import BalanceCard, { TransactionItem } from '../components/BalanceCard';
import { Text, FadeInView, IconButton, SectionTitle } from '../components/ui';
import AIAssistantFAB from '../components/ui/AIAssistantFAB';

export default function HomeScreen() {
  const { theme } = useTheme();
  const { horizontalPadding, contentWidth, isTablet } = useResponsive();
  const [balanceVisible, setBalanceVisible] = useState(true);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingHorizontal: horizontalPadding,
            maxWidth: isTablet ? contentWidth + horizontalPadding * 2 : undefined,
            alignSelf: isTablet ? 'center' : undefined,
            width: isTablet ? '100%' : undefined,
          },
        ]}
      >
        <FadeInView delay={0}>
          <View style={styles.header}>
            <View>
              <Text variant="h2">Olá, {user.firstName} 👋</Text>
              <Text variant="bodySmall" color="secondary">
                Bem-vindo de volta
              </Text>
            </View>
            <IconButton icon="notifications-outline" badge onPress={() => {}} />
          </View>
        </FadeInView>

        <BalanceCard
          balance={user.balance}
          accountNumber={user.accountNumber}
          visible={balanceVisible}
          onToggleVisibility={() => setBalanceVisible(!balanceVisible)}
        />

        <VirtualCard />

        <View style={styles.quickActionsSection}>
          <SectionTitle>Ações rápidas</SectionTitle>
          <View style={styles.quickActionsRow}>
            {quickActions.map((action, index) => (
              <QuickAction
                key={action.id}
                index={index}
                icon={action.icon}
                label={action.label}
                color={action.color}
                onPress={() => {}}
              />
            ))}
          </View>
        </View>

        <View style={styles.transactionsSection}>
          <View style={styles.sectionHeader}>
            <SectionTitle style={styles.sectionTitleInline}>Últimas movimentações</SectionTitle>
            <TouchableOpacity>
              <Text variant="bodySmall" color="gold" style={styles.seeAll}>
                Ver tudo
              </Text>
            </TouchableOpacity>
          </View>
          {recentTransactions.map((tx, index) => (
            <TransactionItem key={tx.id} transaction={tx} index={index} />
          ))}
        </View>
      </ScrollView>
      <AIAssistantFAB />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: layout.tabBarHeight + 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xxl,
    paddingTop: spacing.sm,
  },
  quickActionsSection: {
    marginTop: spacing.xxl,
    marginBottom: spacing.sm,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionsSection: {
    marginTop: spacing.xxl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitleInline: {
    marginBottom: 0,
  },
  seeAll: {
    fontWeight: '500',
  },
});
