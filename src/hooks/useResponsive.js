import { useWindowDimensions } from 'react-native';
import { layout } from '../theme/spacing';

export function useResponsive() {
  const { width, height } = useWindowDimensions();

  const isSmall = width < 360;
  const isMedium = width >= 360 && width < 768;
  const isLarge = width >= 768;
  const isTablet = width >= 768;

  const contentWidth = Math.min(width - layout.screenPadding * 2, layout.maxContentWidth);
  const horizontalPadding = isTablet ? layout.screenPaddingWide : layout.screenPadding;
  const logoSize = isSmall ? 200 : isTablet ? 320 : 260;
  const columns = isTablet ? 2 : 1;

  return {
    width,
    height,
    isSmall,
    isMedium,
    isLarge,
    isTablet,
    contentWidth,
    horizontalPadding,
    logoSize,
    columns,
  };
}
