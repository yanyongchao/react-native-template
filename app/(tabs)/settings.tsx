import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useLanguage } from '@/contexts/language-context';
import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';
type Language = 'en' | 'zh';

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { theme, actualTheme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const themeOptions: { value: ThemeMode; label: string }[] = [
    { value: 'light', label: t('settings.themeLight') },
    { value: 'dark', label: t('settings.themeDark') },
    { value: 'system', label: t('settings.themeSystem') },
  ];

  const languageOptions: { value: Language; label: string }[] = [
    { value: 'en', label: t('settings.languageEnglish') },
    { value: 'zh', label: t('settings.languageChinese') },
  ];

  const renderOption = (
    option: { value: string; label: string },
    isSelected: boolean,
    onPress: () => void
  ) => {
    const backgroundColor = isSelected ? Colors[actualTheme].tint : Colors[actualTheme].background;
    const textColor = isSelected ? '#fff' : Colors[actualTheme].text;

    return (
      <TouchableOpacity
        key={option.value}
        style={[styles.optionButton, { backgroundColor, borderColor: Colors[actualTheme].tint }]}
        onPress={onPress}
      >
        <Text style={[styles.optionText, { color: textColor }]}>{option.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: Colors[actualTheme].background }}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          {t('settings.title')}
        </ThemedText>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            {t('settings.theme')}
          </ThemedText>
          <View style={styles.optionsContainer}>
            {themeOptions.map(option =>
              renderOption(option, theme === option.value, () => setTheme(option.value))
            )}
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            {t('settings.language')}
          </ThemedText>
          <View style={styles.optionsContainer}>
            {languageOptions.map(option =>
              renderOption(option, language === option.value, () => setLanguage(option.value))
            )}
          </View>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    marginBottom: 15,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 100,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
