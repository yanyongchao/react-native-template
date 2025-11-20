# 使用示例

## 快速使用组合 Hook

使用 `useAppSettings` Hook 可以同时访问主题和语言功能：

```tsx
import { useAppSettings } from '@/hooks/use-app-settings';

function MyComponent() {
  const { colors, t, actualTheme, setTheme, language, setLanguage } = useAppSettings();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>{t('common.welcome')}</Text>
      <Text>当前主题: {actualTheme}</Text>
      <Text>当前语言: {language}</Text>
    </View>
  );
}
```

## 主题切换示例

```tsx
import { useAppSettings } from '@/hooks/use-app-settings';
import { TouchableOpacity } from 'react-native';

function ThemeSwitcher() {
  const { actualTheme, setTheme, t } = useAppSettings();

  const toggleTheme = () => {
    setTheme(actualTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Text>
        {t('settings.theme')}: {actualTheme === 'dark' ? '🌙' : '☀️'}
      </Text>
    </TouchableOpacity>
  );
}
```

## 语言切换示例

```tsx
import { useAppSettings } from '@/hooks/use-app-settings';
import { TouchableOpacity } from 'react-native';

function LanguageSwitcher() {
  const { language, setLanguage, t } = useAppSettings();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <TouchableOpacity onPress={toggleLanguage}>
      <Text>{language === 'zh' ? '🇨🇳 中文' : '🇺🇸 English'}</Text>
    </TouchableOpacity>
  );
}
```

## 带参数的翻译

```tsx
import { useAppSettings } from '@/hooks/use-app-settings';

function WelcomeMessage({ username }: { username: string }) {
  const { t } = useAppSettings();

  return <Text>{t('welcome.message', { name: username })}</Text>;
}

// 在翻译文件中：
// en.json: "welcome": { "message": "Hello, {{name}}!" }
// zh.json: "welcome": { "message": "你好，{{name}}！" }
```

## 完整页面示例

```tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useAppSettings } from '@/hooks/use-app-settings';

export default function ProfileScreen() {
  const { colors, t, actualTheme, setTheme, language, setLanguage } = useAppSettings();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 20,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      color: colors.text,
      marginBottom: 10,
    },
    button: {
      backgroundColor: colors.tint,
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{t('common.settings')}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.theme')}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setTheme('light')}>
          <Text style={styles.buttonText}>{t('settings.themeLight')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setTheme('dark')}>
          <Text style={styles.buttonText}>{t('settings.themeDark')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setTheme('system')}>
          <Text style={styles.buttonText}>{t('settings.themeSystem')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('settings.language')}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setLanguage('en')}>
          <Text style={styles.buttonText}>{t('settings.languageEnglish')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setLanguage('zh')}>
          <Text style={styles.buttonText}>{t('settings.languageChinese')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>当前设置</Text>
        <Text style={{ color: colors.text }}>
          {t('settings.theme')}: {actualTheme}
        </Text>
        <Text style={{ color: colors.text }}>
          {t('settings.language')}: {language}
        </Text>
      </View>
    </ScrollView>
  );
}
```

## ThemedView 和 ThemedText 示例

如果使用项目中的 Themed 组件，代码会更简洁：

```tsx
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { useAppSettings } from '@/hooks/use-app-settings';

function SimpleExample() {
  const { t } = useAppSettings();

  return (
    <ThemedView style={{ padding: 20 }}>
      <ThemedText type="title">{t('common.welcome')}</ThemedText>
      <ThemedText>{t('home.step1Content')}</ThemedText>
    </ThemedView>
  );
}
```

Themed 组件会自动适配当前主题的颜色，无需手动指定。
