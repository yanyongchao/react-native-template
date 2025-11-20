/**
 * 便捷的组合 Hook，同时提供主题和语言功能
 */

import { Colors } from '@/constants/theme';
import { useLanguage } from '@/contexts/language-context';
import { useTheme } from '@/contexts/theme-context';

export function useAppSettings() {
  const { theme, actualTheme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return {
    // 主题相关
    theme,
    actualTheme,
    setTheme,
    colors: Colors[actualTheme],

    // 语言相关
    language,
    setLanguage,
    t,
  };
}
