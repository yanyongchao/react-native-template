import { Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

const typeClassNames = {
  default: 'text-base leading-6 text-text-light dark:text-text-dark',
  defaultSemiBold: 'text-base leading-6 font-semibold text-text-light dark:text-text-dark',
  title: 'text-[32px] font-bold leading-8 text-text-light dark:text-text-dark',
  subtitle: 'text-xl font-bold text-text-light dark:text-text-dark',
  link: 'text-base leading-[30px] text-primary-light dark:text-primary-dark',
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className,
  ...rest
}: ThemedTextProps & { className?: string }) {
  // 如果提供了自定义颜色，使用自定义颜色，否则使用 Tailwind 类名
  const customColor =
    lightColor || darkColor
      ? useThemeColor({ light: lightColor, dark: darkColor }, 'text')
      : undefined;

  return (
    <Text
      className={`${typeClassNames[type]} ${className || ''}`}
      style={[customColor ? { color: customColor } : {}, style]}
      {...rest}
    />
  );
}
