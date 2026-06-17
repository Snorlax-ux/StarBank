import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function GoldGradient({ children, style, variant = 'gold' }) {
  const { theme } = useTheme();

  const colors =
    variant === 'card' ? theme.cardGradient : theme.goldGradient;

  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    overflow: 'hidden',
  },
});
