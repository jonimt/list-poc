import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export const DetailScreen: FC<any> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DetailScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
