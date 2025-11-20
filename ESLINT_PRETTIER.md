# ESLint 和 Prettier 配置说明

## 已安装的包

- `prettier` - 代码格式化工具
- `eslint-config-prettier` - 禁用与 Prettier 冲突的 ESLint 规则
- `eslint-plugin-prettier` - 将 Prettier 规则作为 ESLint 规则运行
- `@typescript-eslint/eslint-plugin` - TypeScript ESLint 插件
- `@typescript-eslint/parser` - TypeScript 解析器

## 可用命令

### ESLint

```bash
pnpm lint          # 检查代码问题
pnpm lint:fix      # 自动修复可修复的问题
```

### Prettier

```bash
pnpm format        # 格式化所有文件
pnpm format:check  # 检查格式但不修改
```

## VS Code 配置

项目已配置为:

- ✅ 保存时自动格式化
- ✅ 保存时自动修复 ESLint 问题
- ✅ 使用 Prettier 作为默认格式化工具

### 推荐安装的 VS Code 扩展

1. **ESLint** (`dbaeumer.vscode-eslint`)
2. **Prettier** (`esbenp.prettier-vscode`)
3. **Expo Tools** (`expo.vscode-expo-tools`)
4. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)

重新加载 VS Code 后会提示安装推荐扩展。

## Prettier 配置

`.prettierrc` 配置:

- 使用单引号
- 添加分号
- 每行最多 100 字符
- 使用 2 空格缩进
- 箭头函数参数省略括号(单参数时)

## ESLint 规则

主要规则:

- Prettier 格式问题显示为警告
- 未使用的变量(以 `_` 开头的除外)显示警告
- 禁止使用 `console.log`(允许 `console.warn` 和 `console.error`)
- 关闭 React prop-types 检查(使用 TypeScript)

## 文件忽略

`.prettierignore` 和 ESLint 配置已设置忽略:

- `node_modules/`
- `.expo/`
- `dist/`
- `android/`
- `ios/`
- 构建产物和日志文件

## 使用建议

1. 提交代码前运行 `pnpm format && pnpm lint:fix`
2. 在 VS Code 中开发时，代码会自动格式化
3. 可以在 CI/CD 中添加 `pnpm format:check` 和 `pnpm lint` 检查
