import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import { layout, radius, spacing } from '../theme';
import { companyInfo } from '../data/mockData';
import ScreenHeader from '../components/ScreenHeader';
import { Logo, Text, FadeInView } from '../components/ui';

export default function AboutScreen() {
  const { theme } = useTheme();
  const { horizontalPadding, isTablet, contentWidth, columns } = useResponsive();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <ScreenHeader title="Sobre nós" subtitle={`Fundada em ${companyInfo.founded}`} />
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
          <View style={[styles.heroCard, { backgroundColor: theme.backgroundCard, borderColor: theme.border }]}>
            <Logo size={180} />
          </View>
        </FadeInView>

        <InfoSection delay={100} title="Nossa História" content={companyInfo.history} theme={theme} />
        <InfoSection delay={150} title="Missão" content={companyInfo.mission} icon="flag" theme={theme} />
        <InfoSection delay={200} title="Visão" content={companyInfo.vision} icon="eye" theme={theme} />

        <FadeInView delay={250}>
          <Text variant="h3" style={styles.sectionTitle}>
            Nossos Valores
          </Text>
        </FadeInView>
        <View style={[styles.valuesGrid, columns === 2 && styles.valuesGridTablet]}>
          {companyInfo.values.map((value, index) => (
            <FadeInView key={value.title} delay={300 + index * 80}>
              <View
                style={[
                  styles.valueCard,
                  columns === 2 && styles.valueCardTablet,
                  { backgroundColor: theme.backgroundCard, borderColor: theme.border },
                ]}
              >
                <View style={[styles.valueIcon, { backgroundColor: theme.gold + '15' }]}>
                  <Ionicons name={value.icon} size={22} color={theme.gold} />
                </View>
                <Text variant="bodySmall" style={styles.valueTitle}>
                  {value.title}
                </Text>
                <Text variant="caption" color="muted">
                  {value.description}
                </Text>
              </View>
            </FadeInView>
          ))}
        </View>

        <FadeInView delay={600}>
          <Text variant="h3" style={styles.sectionTitle}>
            Diferenciais
          </Text>
        </FadeInView>
        {companyInfo.differentiators.map((item, index) => (
          <FadeInView key={item} delay={650 + index * 60} from="left" distance={16}>
            <View
              style={[
                styles.differentialItem,
                { backgroundColor: theme.backgroundCard, borderColor: theme.border },
              ]}
            >
              <Ionicons name="checkmark-circle" size={22} color={theme.success} />
              <Text variant="bodySmall" style={styles.differentialText}>
                {item}
              </Text>
            </View>
          </FadeInView>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoSection({ title, content, icon, delay, theme }) {
  return (
    <FadeInView delay={delay}>
      <View style={[styles.infoSection, { backgroundColor: theme.backgroundCard, borderColor: theme.border }]}>
        <View style={styles.infoHeader}>
          {icon && (
            <View style={[styles.infoIcon, { backgroundColor: theme.gold + '18' }]}>
              <Ionicons name={icon} size={18} color={theme.gold} />
            </View>
          )}
          <Text variant="body" style={styles.infoTitle}>
            {title}
          </Text>
        </View>
        <Text variant="bodySmall" color="secondary" style={styles.infoContent}>
          {content}
        </Text>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: layout.tabBarHeight + 32,
  },
  heroCard: {
    borderRadius: radius.xl,
    padding: spacing.xxl,
    alignItems: 'center',
    marginBottom: spacing.xxl,
    borderWidth: 1,
  },
  infoSection: {
    borderRadius: radius.lg,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  infoIcon: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTitle: {
    fontWeight: '600',
  },
  infoContent: {
    lineHeight: 22,
  },
  sectionTitle: {
    marginTop: spacing.lg,
    marginBottom: 14,
  },
  valuesGrid: {
    gap: 12,
    marginBottom: 8,
  },
  valuesGridTablet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  valueCard: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    marginBottom: 4,
  },
  valueCardTablet: {
    width: '48%',
    flexGrow: 1,
  },
  valueIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  valueTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
  differentialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: radius.md,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
  },
  differentialText: {
    flex: 1,
  },
});
