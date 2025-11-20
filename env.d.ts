declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_API_URL: string;
      EXPO_PUBLIC_APP_ENV: string;
      EXPO_PUBLIC_APP_NAME?: string;
      EXPO_PUBLIC_ANDROID_PACKAGE?: string;
    }
  }
}

export {};
