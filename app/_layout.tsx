import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';
import '../locales/i18n';

import { LanguageProvider } from '@/contexts/language-context';
import { ThemeProvider, useTheme } from '@/contexts/theme-context';
import { useThemeConfig } from '@/hooks/use-theme-config';

export const unstable_settings = {
  anchor: '(tabs)',
};

function RootLayoutNav() {
  const { actualTheme } = useTheme();
  const themeConfig = useThemeConfig();
  return (
    <NavigationThemeProvider value={themeConfig}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style={actualTheme === 'dark' ? 'light' : 'dark'} />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RootLayoutNav />
      </LanguageProvider>
    </ThemeProvider>
  );
}
