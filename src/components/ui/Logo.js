import { Image, StyleSheet } from 'react-native';
import { useResponsive } from '../../hooks/useResponsive';

const logoSource = require('../../../assets/logo.png');

export default function Logo({ size, style, variant = 'full' }) {
  const { logoSize } = useResponsive();
  const finalSize = size ?? logoSize;

  const dimensions =
    variant === 'compact'
      ? { width: finalSize * 0.5, height: finalSize * 0.15 }
      : { width: finalSize, height: finalSize * 0.85 };

  return (
    <Image
      source={logoSource}
      style={[styles.logo, dimensions, style]}
      resizeMode="contain"
      accessibilityLabel="Starbank - Um banco para o seu futuro"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
});
