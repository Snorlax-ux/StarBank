import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../context/ThemeContext';
import { radius } from '../../theme/radius';
import { shadows } from '../../theme/shadows';
import PressableScale from './PressableScale';
import Text from './Text';

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'lg',
  style,
  loading = false,
  disabled = false,
  icon,
}) {
  const { theme } = useTheme();
  const isPrimary = variant === 'primary';
  const isOutline = variant === 'outline';
  const isGhost = variant === 'ghost';

  const content = (
    <>
      {loading ? (
        <ActivityIndicator color={isPrimary ? theme.background : theme.gold} />
      ) : (
        <Text
          variant="body"
          style={[
            styles.text,
            size === 'sm' && styles.textSm,
            isPrimary && { color: theme.background },
            (isOutline || isGhost) && { color: theme.gold },
          ]}
        >
          {title}
        </Text>
      )}
    </>
  );

  if (isPrimary) {
    return (
      <PressableScale
        onPress={onPress}
        disabled={disabled || loading}
        style={[styles.wrapper, (disabled || loading) && styles.disabled, style]}
      >
        <LinearGradient
          colors={theme.goldGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.button, size === 'sm' && styles.buttonSm, shadows.gold]}
        >
          {content}
        </LinearGradient>
      </PressableScale>
    );
  }

  return (
    <PressableScale
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        size === 'sm' && styles.buttonSm,
        isOutline && { borderWidth: 1.5, borderColor: theme.gold, backgroundColor: 'transparent' },
        isGhost && { backgroundColor: theme.gold + '15' },
        (disabled || loading) && styles.disabled,
        style,
      ]}
    >
      {content}
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 54,
  },
  buttonSm: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    minHeight: 44,
  },
  text: {
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  textSm: {
    fontSize: 14,
  },
  disabled: {
    opacity: 0.5,
  },
});
