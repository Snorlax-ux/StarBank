import { View, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animated, { useAnimatedStyle, withSpring, useSharedValue } from 'react-native-reanimated';
import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { layout, radius, shadows } from '../theme';
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const tabConfig = [
  { name: 'Home', component: HomeScreen, icon: 'home', label: 'Início' },
  { name: 'Services', component: ServicesScreen, icon: 'grid', label: 'Serviços' },
  { name: 'About', component: AboutScreen, icon: 'business', label: 'Sobre' },
  { name: 'Profile', component: ProfileScreen, icon: 'person', label: 'Perfil' },
];

function TabBarIcon({ focused, icon, color, theme }) {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(focused ? 1.15 : 1, { damping: 12, stiffness: 200 });
  }, [focused, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <View
        style={[
          styles.iconWrap,
          focused && { backgroundColor: theme.gold + '20' },
        ]}
      >
        <Ionicons name={focused ? icon : `${icon}-outline`} size={22} color={color} />
      </View>
    </Animated.View>
  );
}

export default function TabNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const config = tabConfig.find((t) => t.name === route.name);
        return {
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.tabBar,
            borderTopColor: theme.border,
            borderTopWidth: 1,
            height: layout.tabBarHeight,
            paddingBottom: Platform.OS === 'ios' ? 8 : 12,
            paddingTop: 8,
            ...shadows.md,
          },
          tabBarActiveTintColor: theme.gold,
          tabBarInactiveTintColor: theme.textMuted,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} icon={config.icon} color={color} theme={theme} />
          ),
        };
      }}
    >
      {tabConfig.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{ tabBarLabel: tab.label }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconWrap: {
    width: 40,
    height: 32,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
