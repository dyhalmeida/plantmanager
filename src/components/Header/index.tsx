import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
const Header = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: getStatusBarHeight(),
  },
});

export { Header };
