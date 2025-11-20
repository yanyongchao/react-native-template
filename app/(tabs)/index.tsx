import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet } from 'react-native';

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
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('home.title')}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home.step1Title')}</ThemedText>
        <ThemedText>{t('home.step1Content', { key: devToolKey })}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
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
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home.step3Title')}</ThemedText>
        <ThemedText>{t('home.step3Content')}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
