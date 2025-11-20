import { ThemedText } from '@/components/themed-text';
import { useLanguage } from '@/contexts/language-context';
import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

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
    return (
      <TouchableOpacity
        key={option.value}
        className={`px-5 py-3 rounded-lg border min-w-[100px] items-center ${
          isSelected
            ? 'bg-primary-light dark:bg-primary-dark border-primary-light dark:border-primary-dark'
            : 'bg-background-light dark:bg-background-dark border-primary-light dark:border-primary-dark'
        }`}
        onPress={onPress}
      >
        <Text
          className={`text-base font-medium ${
            isSelected ? 'text-white' : 'text-text-light dark:text-text-dark'
          }`}
        >
          {option.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView>
        <View className="p-5">
          <ThemedText type="title" className="mb-8">
            {t('settings.title')}22
          </ThemedText>

          <View className="mb-8">
            <ThemedText type="subtitle" className="mb-4">
              {t('settings.theme')}
            </ThemedText>
            <View className="flex-row flex-wrap gap-2.5">
              {themeOptions.map(option =>
                renderOption(option, theme === option.value, () => setTheme(option.value))
              )}
            </View>
          </View>

          <View className="mb-8">
            <ThemedText type="subtitle" className="mb-4">
              {t('settings.language')}
            </ThemedText>
            <View className="flex-row flex-wrap gap-2.5">
              {languageOptions.map(option =>
                renderOption(option, language === option.value, () => setLanguage(option.value))
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
