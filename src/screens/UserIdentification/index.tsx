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
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const UserIdentification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>😄</Text>
              <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
              <TextInput style={styles.input} placeholder="Digite um nome" />
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
});

export { UserIdentification };
