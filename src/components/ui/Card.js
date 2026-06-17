import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';

export default function Card({ children, style, variant = 'default', padding = 'lg' }) {
  const { theme } = useTheme();

  const paddingMap = { sm: 12, md: 16, lg: 20, xl: 24 };

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.backgroundCard,
          borderColor: variant === 'gold' ? theme.borderLight : theme.border,
        },
        variant === 'elevated' && shadows.md,
        variant === 'gold' && { borderWidth: 1 },
        { padding: paddingMap[padding] ?? paddingMap.lg },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    borderWidth: 1,
    overflow: 'hidden',
  },
});
