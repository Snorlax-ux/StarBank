import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { radius } from '../theme';
import Card from './ui/Card';
import Text from './ui/Text';
import FadeInView from './ui/FadeInView';

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function BalanceCard({ balance, accountNumber, visible, onToggleVisibility }) {
  const { theme } = useTheme();

  return (
    <FadeInView delay={100}>
      <Card variant="gold" style={styles.card}>
        <View style={styles.header}>
          <Text variant="bodySmall" color="secondary">
            Saldo disponível
          </Text>
          <TouchableOpacity onPress={onToggleVisibility} hitSlop={12}>
            <Ionicons
              name={visible ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={theme.textSecondary}
            />
          </TouchableOpacity>
        </View>
        <Text variant="balance" style={styles.balance}>
          {visible ? formatCurrency(balance) : 'R$ ••••••'}
        </Text>
        <Text variant="caption" color="muted">
          Conta {accountNumber}
        </Text>
      </Card>
    </FadeInView>
  );
}

export function TransactionItem({ transaction, index = 0 }) {
  const { theme } = useTheme();
  const isCredit = transaction.type === 'credit';

  return (
    <FadeInView delay={400 + index * 80} from="left" distance={16}>
      <View style={[styles.txItem, { backgroundColor: theme.backgroundCard, borderColor: theme.border }]}>
        <View
          style={[
            styles.txIcon,
            { backgroundColor: (isCredit ? theme.success : theme.error) + '20' },
          ]}
        >
          <Ionicons
            name={isCredit ? 'arrow-down' : 'arrow-up'}
            size={18}
            color={isCredit ? theme.success : theme.error}
          />
        </View>
        <View style={styles.txInfo}>
          <Text variant="bodySmall" style={styles.txTitle}>
            {transaction.title}
          </Text>
          <Text variant="caption" color="muted">
            {transaction.date}
          </Text>
        </View>
        <Text
          variant="bodySmall"
          style={[styles.txAmount, { color: isCredit ? theme.success : theme.text }]}
        >
          {isCredit ? '+' : ''}
          {formatCurrency(Math.abs(transaction.amount))}
        </Text>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  balance: {
    marginBottom: 4,
  },
  txItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.lg,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    gap: 12,
  },
  txIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txInfo: {
    flex: 1,
  },
  txTitle: {
    fontWeight: '500',
  },
  txAmount: {
    fontWeight: '600',
  },
});
