import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import { spacing, radius } from '../theme';
import { Logo, Button, Text, FadeInView, ScaleInView } from '../components/ui';

const features = [
  { icon: 'shield-checkmark', text: 'Seguro e confiável' },
  { icon: 'flash', text: 'Transações instantâneas' },
  { icon: 'trending-up', text: 'Seu dinheiro rende' },
];

export default function WelcomeScreen({ navigation }) {
  const { theme } = useTheme();
  const { horizontalPadding, isTablet } = useResponsive();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.content, { paddingHorizontal: horizontalPadding }]}>
        <ScaleInView delay={0}>
          <Logo size={isTablet ? 300 : 240} />
        </ScaleInView>

        <View style={styles.features}>
          {features.map((feature, index) => (
            <FadeInView key={feature.text} delay={400 + index * 120} from="left" distance={30}>
              <View
                style={[
                  styles.featureItem,
                  { backgroundColor: theme.backgroundCard, borderColor: theme.border },
                ]}
              >
                <View style={[styles.featureIcon, { backgroundColor: theme.gold + '18' }]}>
                  <Ionicons name={feature.icon} size={20} color={theme.gold} />
                </View>
                <Text variant="body" style={styles.featureText}>
                  {feature.text}
                </Text>
              </View>
            </FadeInView>
          ))}
        </View>
      </View>

      <FadeInView delay={800} style={[styles.footer, { paddingHorizontal: horizontalPadding }]}>
        <Button title="Acessar o aplicativo" onPress={() => navigation.replace('Main')} />
        <Text variant="caption" color="muted" style={styles.footerText}>
          Ao continuar, você concorda com nossos termos de uso.
        </Text>
      </FadeInView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.xxxl,
  },
  features: {
    gap: spacing.lg,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    fontWeight: '500',
  },
  footer: {
    paddingBottom: spacing.xxxl,
    gap: spacing.lg,
  },
  footerText: {
    textAlign: 'center',
    lineHeight: 18,
  },
});
