import { Text as RNText, StyleSheet } from 'react-native';
import { typography } from '../../theme/typography';
import { useTheme } from '../../context/ThemeContext';

const variantColors = {
  primary: 'text',
  secondary: 'textSecondary',
  muted: 'textMuted',
  gold: 'gold',
  inverse: 'background',
  success: 'success',
  error: 'error',
};

export default function Text({ variant = 'body', color = 'primary', style, children, ...props }) {
  const { theme } = useTheme();
  const colorKey = variantColors[color] ?? color;

  return (
    <RNText
      style={[
        typography[variant] ?? typography.body,
        { color: theme[colorKey] ?? colorKey },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}

export function SectionTitle({ children, style }) {
  return (
    <Text variant="h3" style={[styles.sectionTitle, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 16,
  },
});
