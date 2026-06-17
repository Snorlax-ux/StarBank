import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../context/ThemeContext';
import { radius, shadows } from '../theme';
import { user } from '../data/mockData';
import Text from './ui/Text';
import FadeInView from './ui/FadeInView';

export default function VirtualCard() {
  const { theme } = useTheme();

  return (
    <FadeInView delay={200} from="scale" distance={30}>
      <View style={[styles.wrapper, shadows.lg]}>
        <LinearGradient
          colors={[theme.backgroundElevated, theme.backgroundCard, '#000B1E']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.card, { borderColor: theme.borderLight }]}
        >
          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <View style={styles.chipRow}>
                <LinearGradient colors={theme.goldGradient} style={styles.chip} />
                <Ionicons name="wifi" size={20} color={theme.goldLight} style={styles.nfc} />
              </View>
              <View style={styles.logoRow}>
                <Ionicons name="star" size={16} color={theme.gold} />
                <Text variant="bodySmall" color="gold" style={styles.brandName}>
                  starbank
                </Text>
              </View>
            </View>

            <Text variant="h3" style={styles.cardNumber}>
              •••• •••• •••• 4829
            </Text>

            <View style={styles.cardFooter}>
              <View>
                <Text variant="label" color="gold" style={styles.cardLabel}>
                  TITULAR
                </Text>
                <Text variant="caption" style={styles.cardValue}>
                  {user.name.toUpperCase()}
                </Text>
              </View>
              <View>
                <Text variant="label" color="gold" style={styles.cardLabel}>
                  VÁLIDO ATÉ
                </Text>
                <Text variant="caption" style={styles.cardValue}>
                  12/28
                </Text>
              </View>
              <View style={styles.visaBadge}>
                <Text style={[styles.visaText, { color: theme.background }]}>VISA</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
  },
  card: {
    borderRadius: radius.xl,
    overflow: 'hidden',
    height: 200,
    borderWidth: 1,
  },
  cardContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  chipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chip: {
    width: 36,
    height: 26,
    borderRadius: 4,
  },
  nfc: {
    transform: [{ rotate: '90deg' }],
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  brandName: {
    fontWeight: '700',
    letterSpacing: 1,
  },
  cardNumber: {
    letterSpacing: 3,
    fontWeight: '500',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 24,
  },
  cardLabel: {
    marginBottom: 2,
    fontSize: 9,
  },
  cardValue: {
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  visaBadge: {
    marginLeft: 'auto',
    backgroundColor: '#D4AF37',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  visaText: {
    fontSize: 14,
    fontWeight: '900',
    fontStyle: 'italic',
  },
});
