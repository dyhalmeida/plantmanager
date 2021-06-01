import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const UserIdentification = () => {
  const [focused, setFocused] = React.useState(false);
  const [dirty, setDirty] = React.useState(false);
  const [username, setUsername] = React.useState<string>();
  const navigation = useNavigation();

  function handleInputBlur() {
    setFocused(false);
    setDirty(!!username);
  }

  function handleInputFocus() {
    setFocused(true);
  }

  function handleInputChange(text: string) {
    setDirty(!!text);
    setUsername(text);
  }

  async function handleConfirmationPage() {

    if (!username) {
      return Alert.alert(
        'Me diz como chamar você? 😭',
        'É importante nos informar o seu nome para uma melhor experiência na aplicação.',
        [
          {
            text: "Certo"
          },
        ]
      );
    }

    await AsyncStorage.setItem('@plantmanager:username', username);

    navigation.navigate('ConfirmationUser');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>{dirty ? '😄' : '🙂'}</Text>
              <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
              <TextInput
                style={[
                  styles.input,
                    focused || dirty
                      ? { borderColor: colors.green }
                      : { borderColor: colors.gray },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                  onChangeText={(text) => handleInputChange(text)}
              />
            </View>
            <View style={styles.footer}>
                <Button text="Confirmar" onPress={handleConfirmationPage} />
            </View>
          </View>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  header: {
    alignItems: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 54,
  },
  emoji: {
    fontSize: 44,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
  },
});

export { UserIdentification };
