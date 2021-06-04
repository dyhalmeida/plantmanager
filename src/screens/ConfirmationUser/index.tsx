import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Button } from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ParamsProps {
  title: string;
  subtitle: string;
  textButton: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  smile: '😄',
  hug: '🤗'
}

const ConfirmationUser = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    textButton,
    icon,
    nextScreen
  } = routes.params as ParamsProps;

  function handlePlantSelectPage() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
        <View style={styles.footer}>
          <Button text={textButton} onPress={handlePlantSelectPage} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingHorizontal: 10,
    color: colors.heading,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  },
});

export { ConfirmationUser };
