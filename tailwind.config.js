/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class', // 启用基于 class 的暗黑模式
  theme: {
    extend: {
      colors: {
        // 主题颜色配置 - 直接使用颜色值，不依赖 CSS 变量
        primary: {
          light: '#0a7ea4',
          dark: '#ffffff',
          DEFAULT: '#0a7ea4', // 默认使用浅色
        },
        background: {
          light: '#ffffff',
          dark: '#151718',
          DEFAULT: '#ffffff',
        },
        text: {
          light: '#11181C',
          dark: '#ECEDEE',
          DEFAULT: '#11181C',
        },
        icon: {
          light: '#687076',
          dark: '#9BA1A6',
          DEFAULT: '#687076',
        },
      },
    },
  },
  plugins: [],
};
