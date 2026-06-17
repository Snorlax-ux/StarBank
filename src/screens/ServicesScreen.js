import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import { useResponsive } from '../hooks/useResponsive';
import { layout } from '../theme';
import { services } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';
import ScreenHeader from '../components/ScreenHeader';

export default function ServicesScreen() {
  const { theme } = useTheme();
  const { horizontalPadding, isTablet, contentWidth } = useResponsive();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <ScreenHeader title="Serviços" subtitle="Tudo que você precisa em um só lugar" />
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
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            index={index}
            icon={service.icon}
            name={service.name}
            description={service.description}
            color={service.color}
            onPress={() => {}}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: layout.tabBarHeight + 24,
  },
});
