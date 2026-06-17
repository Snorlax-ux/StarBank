import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { radius } from '../theme';
import PressableScale from './ui/PressableScale';
import Text from './ui/Text';
import FadeInView from './ui/FadeInView';

export default function QuickAction({ icon, label, color, onPress, index = 0 }) {
  const { theme } = useTheme();

  return (
    <FadeInView delay={300 + index * 80} from="bottom" distance={16}>
      <PressableScale onPress={onPress} style={styles.container}>
        <View style={[styles.iconContainer, { backgroundColor: (color ?? theme.gold) + '20' }]}>
          <Ionicons name={icon} size={24} color={color ?? theme.gold} />
        </View>
        <Text variant="caption" color="secondary" style={styles.label}>
          {label}
        </Text>
      </PressableScale>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    fontWeight: '500',
  },
});
