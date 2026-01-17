import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component Square
const Square = () => {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>Hello, world</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Square />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: '#f74dc4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});




