import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TEST</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
