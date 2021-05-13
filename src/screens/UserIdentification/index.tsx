import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Button } from '../../components/Button';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const UserIdentification = () => {
  const [focused, setFocused] = React.useState(false);
  const [dirty, setDirty] = React.useState(false);
  const [username, setUsername] = React.useState<string>();

  function handleInputBlur() {
    setFocused(false);
    setDirty(!!username);
  }

  function handleInputFocus() {
    setFocused(true);
  }

  function handleInputChange(value: string) {
    setDirty(!!value);
    setUsername(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>{dirty ? '😄' : '🙂'}</Text>
              <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
              <TextInput
                style={[
                  styles.input,
                  (focused || dirty) && { borderColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChange={handleInputChange}
              />
            </View>
            <View style={styles.footer}>
              <Button value="Confirmar" />
            </View>
          </View>
        </View>
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
