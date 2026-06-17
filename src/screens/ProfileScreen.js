import { View, StyleSheet, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import { layout, radius, spacing } from '../theme';
import { user, profileSettings } from '../data/mockData';
import ScreenHeader from '../components/ScreenHeader';
import { Text, FadeInView, PressableScale } from '../components/ui';

export default function ProfileScreen() {
  const { theme, isDark, toggleTheme } = useTheme();
  const { horizontalPadding, isTablet, contentWidth } = useResponsive();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const sections = [...new Set(profileSettings.map((s) => s.section))];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <ScreenHeader title="Perfil" subtitle="Suas configurações" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingHorizontal: horizontalPadding,
            maxWidth: isTablet ? contentWidth + horizontalPadding * 2 : undefined,
            alignSelf: isTablet ? 'center' : undefined,
            width: isTablet ? '100%' : undefined,
          },
        ]}
      >
        <FadeInView delay={0}>
          <View style={[styles.profileCard, { backgroundColor: theme.backgroundCard, borderColor: theme.border }]}>
            <View style={[styles.avatar, { backgroundColor: theme.gold }]}>
              <Text variant="h2" style={{ color: theme.background }}>
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </Text>
            </View>
            <View style={styles.profileInfo}>
              <Text variant="h3">{user.name}</Text>
              <Text variant="bodySmall" color="secondary">
                {user.email}
              </Text>
            </View>
            <PressableScale haptic={false}>
              <View style={[styles.editButton, { backgroundColor: theme.gold + '20' }]}>
                <Ionicons name="create-outline" size={20} color={theme.gold} />
              </View>
            </PressableScale>
          </View>
        </FadeInView>

        {sections.map((section, sIndex) => (
          <FadeInView key={section} delay={150 + sIndex * 100}>
            <Text variant="label" color="muted" style={styles.sectionLabel}>
              {section}
            </Text>
            <View style={[styles.settingsGroup, { backgroundColor: theme.backgroundCard, borderColor: theme.border }]}>
              {profileSettings
                .filter((s) => s.section === section)
                .map((setting, index, arr) => (
                  <PressableScale key={setting.id} haptic={false} style={styles.settingPressable}>
                    <View
                      style={[
                        styles.settingItem,
                        index < arr.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border },
                      ]}
                    >
                      <View style={[styles.settingIcon, { backgroundColor: theme.gold + '15' }]}>
                        <Ionicons name={setting.icon} size={20} color={theme.gold} />
                      </View>
                      <Text variant="body" style={styles.settingLabel}>
                        {setting.label}
                      </Text>
                      {setting.toggle && (
                        <Switch
                          value={notificationsEnabled}
                          onValueChange={setNotificationsEnabled}
                          trackColor={{ false: theme.surface, true: theme.gold + '60' }}
                          thumbColor={notificationsEnabled ? theme.gold : theme.textMuted}
                        />
                      )}
                      {setting.themeToggle && (
                        <Switch
                          value={isDark}
                          onValueChange={toggleTheme}
                          trackColor={{ false: theme.surface, true: theme.gold + '60' }}
                          thumbColor={isDark ? theme.gold : theme.textMuted}
                        />
                      )}
                      {!setting.toggle && !setting.themeToggle && (
                        <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
                      )}
                    </View>
                  </PressableScale>
                ))}
            </View>
          </FadeInView>
        ))}

        <FadeInView delay={500}>
          <PressableScale style={styles.logoutPressable}>
            <View style={[styles.logoutButton, { backgroundColor: theme.error + '15', borderColor: theme.error + '30' }]}>
              <Ionicons name="log-out-outline" size={20} color={theme.error} />
              <Text variant="body" style={{ color: theme.error, fontWeight: '600' }}>
                Sair da conta
              </Text>
            </View>
          </PressableScale>
          <Text variant="caption" color="muted" style={styles.version}>
            starbank v1.0.0
          </Text>
        </FadeInView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: layout.tabBarHeight + 32,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: radius.xl,
    padding: spacing.xl,
    marginBottom: spacing.xxl,
    borderWidth: 1,
    gap: spacing.lg,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionLabel: {
    marginBottom: spacing.sm,
    marginTop: spacing.sm,
  },
  settingsGroup: {
    borderRadius: radius.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },
  settingPressable: {},
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    gap: 14,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingLabel: {
    flex: 1,
    fontWeight: '500',
  },
  logoutPressable: {
    marginTop: spacing.sm,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
  },
  version: {
    textAlign: 'center',
    marginTop: spacing.xl,
  },
});
