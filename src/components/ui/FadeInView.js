import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from '../../context/ThemeContext';

export default function FadeInView({
  children,
  delay = 0,
  duration = 500,
  style,
  from = 'bottom',
  distance = 24,
}) {
  const { theme } = useTheme();
  const opacity = useSharedValue(0);
  const translate = useSharedValue(from === 'none' ? 0 : distance);

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration }));
    translate.value = withDelay(
      delay,
      withSpring(0, { damping: 18, stiffness: 120 }),
    );
  }, [delay, duration, opacity, translate]);

  const animatedStyle = useAnimatedStyle(() => {
    const transforms = [];
    if (from === 'bottom') transforms.push({ translateY: translate.value });
    if (from === 'left') transforms.push({ translateX: -translate.value });
    if (from === 'right') transforms.push({ translateX: translate.value });
    if (from === 'scale') transforms.push({ scale: 0.9 + (1 - translate.value / distance) * 0.1 });

    return {
      opacity: opacity.value,
      transform: transforms.length ? transforms : undefined,
    };
  });

  return (
    <Animated.View style={[{ backgroundColor: 'transparent' }, animatedStyle, style]}>
      {children}
    </Animated.View>
  );
}

export function ScaleInView({ children, delay = 0, style }) {
  const scale = useSharedValue(0.85);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: 600 }));
    scale.value = withDelay(delay, withSpring(1, { damping: 14, stiffness: 100 }));
  }, [delay, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>;
}
