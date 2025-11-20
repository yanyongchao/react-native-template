import Constants from 'expo-constants';

/**
 * 获取环境变量
 * 使用 expo-constants 在运行时访问配置的环境变量
 */
export const env = {
  // API 配置
  apiUrl: Constants.expoConfig?.extra?.apiUrl as string,
  appEnv: Constants.expoConfig?.extra?.appEnv as string,

  // 是否为开发环境
  isDev: Constants.expoConfig?.extra?.appEnv === 'development',
  isStaging: Constants.expoConfig?.extra?.appEnv === 'staging',
  isProd: Constants.expoConfig?.extra?.appEnv === 'production',
};

/**
 * 日志输出环境信息 (仅开发环境)
 */
if (__DEV__) {
  console.log('🌍 Environment:', env.appEnv);
  console.log('🔗 API URL:', env.apiUrl);
}

export default env;
