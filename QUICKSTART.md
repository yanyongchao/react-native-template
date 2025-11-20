# 🌍 多语言 & 🌙 暗黑模式 - 快速开始

## ✨ 新功能

你的应用现在支持：

1. **🌍 多语言切换**
   - 中文 🇨🇳
   - English 🇺🇸
   - 自动检测设备语言
2. **🌙 主题模式**
   - ☀️ 浅色模式
   - 🌙 深色模式
   - 🔄 跟随系统

3. **💾 持久化存储**
   - 用户设置自动保存
   - 应用重启后保持选择

## 🚀 快速使用

### 访问设置页面

1. 运行应用: `pnpm start:dev`
2. 在底部导航栏点击 **"设置"** 标签
3. 选择你喜欢的主题和语言

### 在代码中使用

#### 方式 1: 使用组合 Hook（推荐）

```tsx
import { useAppSettings } from '@/hooks/use-app-settings';

function MyComponent() {
  const { colors, t, actualTheme } = useAppSettings();

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>{t('common.welcome')}</Text>
    </View>
  );
}
```

#### 方式 2: 使用 Themed 组件（最简单）

```tsx
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <ThemedView>
      <ThemedText type="title">{t('common.welcome')}</ThemedText>
      <ThemedText>{t('home.step1Content')}</ThemedText>
    </ThemedView>
  );
}
```

## 📝 添加新翻译

### 1. 编辑翻译文件

**locales/en.json**

```json
{
  "en": {
    "translation": {
      "myNewFeature": {
        "title": "My New Feature",
        "button": "Click Me"
      }
    }
  }
}
```

**locales/zh.json**

```json
{
  "zh": {
    "translation": {
      "myNewFeature": {
        "title": "我的新功能",
        "button": "点击我"
      }
    }
  }
}
```

### 2. 在组件中使用

```tsx
const { t } = useTranslation();

<Text>{t('myNewFeature.title')}</Text>
<Button title={t('myNewFeature.button')} />
```

## 🎨 自定义主题颜色

编辑 `constants/theme.ts` 文件：

```typescript
export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: '#0a7ea4', // 修改这里的颜色
    // ...
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff', // 修改这里的颜色
    // ...
  },
};
```

## 📦 新增的文件

```
my-app/
├── locales/                    # 📁 多语言配置
│   ├── en.json                # 🇺🇸 英文翻译
│   ├── zh.json                # 🇨🇳 中文翻译
│   └── i18n.ts                # ⚙️ i18n 初始化
│
├── contexts/                   # 📁 全局状态管理
│   ├── theme-context.tsx      # 🎨 主题 Context
│   └── language-context.tsx   # 🌍 语言 Context
│
├── hooks/
│   └── use-app-settings.ts    # 🎣 组合 Hook
│
├── app/(tabs)/
│   └── settings.tsx           # ⚙️ 设置页面（新增）
│
├── FEATURES.md                 # 📖 功能说明文档
├── EXAMPLES.md                 # 💡 使用示例
└── QUICKSTART.md              # 🚀 本文件
```

## 🔧 已修改的文件

- `app/_layout.tsx` - 集成主题和语言 Context
- `app/(tabs)/_layout.tsx` - 标签导航国际化
- `app/(tabs)/index.tsx` - 首页国际化
- `app/modal.tsx` - 模态框国际化

## 📚 更多文档

- [FEATURES.md](./FEATURES.md) - 详细功能说明和架构
- [EXAMPLES.md](./EXAMPLES.md) - 更多代码示例

## 🐛 遇到问题？

1. 确保已安装所有依赖: `pnpm install`
2. 清除缓存: `pnpm start -- --clear`
3. 检查 [FEATURES.md](./FEATURES.md) 中的注意事项

## 🎉 开始使用

```bash
# 启动开发服务器
pnpm start:dev

# iOS
pnpm ios:dev

# Android
pnpm android:dev

# Web
pnpm web
```

享受多语言和暗黑模式带来的体验提升！🚀
