import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function Divider({ style, color }) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.divider,
        { backgroundColor: color ?? theme.border },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
  },
});
