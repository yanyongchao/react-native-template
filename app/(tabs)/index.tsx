import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { t } = useTranslation();

  const devToolKey = Platform.select({
    ios: 'cmd + d',
    android: 'cmd + m',
    web: 'F12',
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          className="h-[178px] w-[290px] absolute bottom-0 left-0"
        />
      }
    >
      <ThemedView className="flex-row items-center gap-2">
        <ThemedText type="title">{t('home.title')}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView className="gap-2 mb-2">
        <ThemedText type="subtitle">{t('home.step1Title')}</ThemedText>
        <ThemedText>{t('home.step1Content', { key: devToolKey })}</ThemedText>
      </ThemedView>
      <ThemedView className="gap-2 mb-2">
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">{t('home.step2Title')}</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title={t('home.action')}
              icon="cube"
              onPress={() => alert(t('home.actionPressed'))}
            />
            <Link.MenuAction
              title={t('home.share')}
              icon="square.and.arrow.up"
              onPress={() => alert(t('home.sharePressed'))}
            />
            <Link.Menu title={t('home.more')} icon="ellipsis">
              <Link.MenuAction
                title={t('home.delete')}
                icon="trash"
                destructive
                onPress={() => alert(t('home.deletePressed'))}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>{t('home.step2Content')}</ThemedText>
      </ThemedView>
      <ThemedView className="gap-2 mb-2">
        <ThemedText type="subtitle">{t('home.step3Title')}</ThemedText>
        <ThemedText>{t('home.step3Content')}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
