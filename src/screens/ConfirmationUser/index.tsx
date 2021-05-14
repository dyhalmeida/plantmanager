import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
const ConfirmationUser = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{'😄'}</Text>
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
});

export { ConfirmationUser };
