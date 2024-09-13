import React, {FC} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';

export const HomeScreen: FC<any> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Detail')}>
        <Text>HomeScreen</Text>
      </Pressable>
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
