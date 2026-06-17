import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { radius } from '../theme';
import PressableScale from './ui/PressableScale';
import Text from './ui/Text';
import FadeInView from './ui/FadeInView';

export default function ServiceCard({ icon, name, description, color, onPress, index = 0 }) {
  const { theme } = useTheme();

  return (
    <FadeInView delay={100 + index * 70} from="left" distance={20}>
      <PressableScale onPress={onPress}>
        <View style={[styles.card, { backgroundColor: theme.backgroundCard, borderColor: theme.border }]}>
          <View style={[styles.iconContainer, { backgroundColor: (color ?? theme.gold) + '18' }]}>
            <Ionicons name={icon} size={26} color={color ?? theme.gold} />
          </View>
          <View style={styles.content}>
            <Text variant="body" style={styles.name}>
              {name}
            </Text>
            <Text variant="bodySmall" color="secondary">
              {description}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
        </View>
      </PressableScale>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.lg,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    gap: 14,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    marginBottom: 4,
  },
});
