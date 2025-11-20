# 多语言和暗黑模式功能说明

## 功能概述

本项目现已支持：

- ✅ **多语言切换** (中文/英文)
- ✅ **暗黑模式切换** (浅色/深色/跟随系统)
- ✅ **持久化存储** (用户设置会被保存)
- ✅ **响应式UI** (自动适配主题和语言变化)

## 项目结构

```
my-app/
├── locales/                    # 多语言配置
│   ├── en.json                # 英文翻译
│   ├── zh.json                # 中文翻译
│   └── i18n.ts                # i18n 配置文件
├── contexts/                   # 全局上下文
│   ├── theme-context.tsx      # 主题管理
│   └── language-context.tsx   # 语言管理
└── app/
    ├── _layout.tsx            # 根布局(集成多语言和主题)
    └── (tabs)/
        ├── index.tsx          # 首页(已国际化)
        ├── explore.tsx        # 探索页
        ├── settings.tsx       # 设置页(新增)
        └── _layout.tsx        # 标签导航(已国际化)
```

## 使用方法

### 1. 在组件中使用多语言

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return <Text>{t('common.welcome')}</Text>;
}
```

### 2. 在组件中使用主题

```tsx
import { useTheme } from '@/contexts/theme-context';
import { Colors } from '@/constants/theme';

function MyComponent() {
  const { actualTheme, theme, setTheme } = useTheme();

  return (
    <View style={{ backgroundColor: Colors[actualTheme].background }}>
      <Text style={{ color: Colors[actualTheme].text }}>当前主题: {theme}</Text>
    </View>
  );
}
```

### 3. 在组件中切换语言

```tsx
import { useLanguage } from '@/contexts/language-context';

function MyComponent() {
  const { language, setLanguage } = useLanguage();

  return <Button title="切换语言" onPress={() => setLanguage(language === 'zh' ? 'en' : 'zh')} />;
}
```

## 添加新的翻译

### 1. 在 `locales/en.json` 中添加英文翻译：

```json
{
  "en": {
    "translation": {
      "myFeature": {
        "title": "My Feature",
        "description": "This is my feature"
      }
    }
  }
}
```

### 2. 在 `locales/zh.json` 中添加中文翻译：

```json
{
  "zh": {
    "translation": {
      "myFeature": {
        "title": "我的功能",
        "description": "这是我的功能"
      }
    }
  }
}
```

### 3. 在组件中使用：

```tsx
const { t } = useTranslation();
<Text>{t('myFeature.title')}</Text>
<Text>{t('myFeature.description')}</Text>
```

## 设置页面

访问 **设置** 标签页可以：

- 切换主题：浅色 / 深色 / 跟随系统
- 切换语言：中文 / English

## 依赖包

新增的依赖包：

- `i18next`: 国际化核心库
- `react-i18next`: React 国际化绑定
- `expo-localization`: 获取设备语言和区域设置
- `@react-native-async-storage/async-storage`: 持久化存储

## 特性

### 主题切换

- 支持三种模式：浅色、深色、跟随系统
- 设置会自动保存到本地存储
- 应用重启后保持用户选择

### 多语言

- 自动检测设备语言
- 支持运行时切换语言
- 无需重启应用
- 设置会自动保存

### 响应式

- 所有 ThemedView 和 ThemedText 组件自动适配主题
- 切换主题或语言时，UI 立即更新
- 状态栏自动适配主题颜色

## 注意事项

1. 所有翻译 key 都应该在 `en.json` 和 `zh.json` 中同时定义
2. 使用 ThemedText 和 ThemedView 组件以获得最佳的主题支持
3. 添加新页面时，记得在标签导航中使用 `t()` 函数翻译标题
4. 颜色值应该从 `Colors[actualTheme]` 中获取，而不是硬编码

## 运行项目

```bash
# 开发环境
pnpm start:dev

# iOS
pnpm ios:dev

# Android
pnpm android:dev

# Web
pnpm web
```

## 后续扩展

可以继续添加：

- 更多语言支持（如日语、韩语等）
- 更多主题选项（如自定义颜色方案）
- RTL（从右到左）语言支持
- 语言包动态加载
- 主题动画过渡效果
