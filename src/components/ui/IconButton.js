import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { radius } from '../../theme/radius';
import PressableScale from './PressableScale';

export default function IconButton({ icon, onPress, size = 44, badge = false, style }) {
  const { theme } = useTheme();

  return (
    <PressableScale onPress={onPress} style={[styles.wrapper, style]}>
      <View
        style={[
          styles.button,
          {
            width: size,
            height: size,
            backgroundColor: theme.backgroundCard,
            borderColor: theme.border,
          },
        ]}
      >
        <Ionicons name={icon} size={22} color={theme.text} />
        {badge && (
          <View style={[styles.badge, { backgroundColor: theme.error }]} />
        )}
      </View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  button: {
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
