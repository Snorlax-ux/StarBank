import { View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Text from './ui/Text';

export default function ScreenHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text variant="h1">{title}</Text>
      {subtitle && (
        <Text variant="bodySmall" color="secondary" style={styles.subtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  subtitle: {
    marginTop: 4,
  },
});
