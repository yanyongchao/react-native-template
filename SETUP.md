# 项目配置说明

## Tailwind CSS 使用

在组件中使用 Tailwind CSS 类名:

\`\`\`tsx
import { View, Text } from 'react-native';

export default function Example() {
return (
<View className="flex-1 items-center justify-center bg-white">
<Text className="text-2xl font-bold text-blue-500">
Hello Tailwind CSS!
</Text>
</View>
);
}
\`\`\`

## 环境变量使用

本项目使用 **dotenvx** 和 **expo-constants** 管理环境变量。

### 方式 1: 使用 process.env (构建时)

在 `app.config.ts` 或任何配置文件中:

\`\`\`tsx
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const appEnv = process.env.EXPO_PUBLIC_APP_ENV;
\`\`\`

### 方式 2: 使用 Constants (运行时)

在组件中使用 expo-constants:

\`\`\`tsx
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.apiUrl;
const appEnv = Constants.expoConfig?.extra?.appEnv;

console.log('API URL:', apiUrl);
console.log('Environment:', appEnv);
\`\`\`

## 环境文件说明

- \`.env\` - 默认环境变量(已在 .gitignore 中)
- \`.env.development\` - 开发环境
- \`.env.staging\` - 测试环境
- \`.env.production\` - 生产环境

**注意**: 所有客户端访问的环境变量必须以 \`EXPO*PUBLIC*\` 为前缀。

## 启动命令

### 开发环境

\`\`\`bash
pnpm start # 或 pnpm start:dev
pnpm android:dev
pnpm ios:dev
\`\`\`

### 测试环境

\`\`\`bash
pnpm start:staging
pnpm android:staging
pnpm ios:staging
\`\`\`

### 生产环境

\`\`\`bash
pnpm start:prod
pnpm android:prod
pnpm ios:prod
\`\`\`

## 添加新的环境变量

1. 在 \`.env.xxx\` 文件中添加变量(必须以 \`EXPO*PUBLIC*\` 开头):
   \`\`\`
   EXPO_PUBLIC_MY_VAR=value
   \`\`\`

2. 在 \`env.d.ts\` 中添加类型声明:
   \`\`\`typescript
   interface ProcessEnv {
   EXPO_PUBLIC_MY_VAR: string;
   }
   \`\`\`

3. 在 \`app.config.ts\` 中添加到 \`extra\` 配置:
   \`\`\`typescript
   extra: {
   myVar: process.env.EXPO_PUBLIC_MY_VAR,
   }
   \`\`\`

4. 在代码中使用:
   \`\`\`typescript
   import Constants from 'expo-constants';
   const myVar = Constants.expoConfig?.extra?.myVar;
   \`\`\`
