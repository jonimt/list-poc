import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {DetailScreen} from './src/screens/DetailScreen';

const RootStack = createNativeStackNavigator();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  fullScreenGestureEnabled: true,
};

export const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={defaultScreenOptions}>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Detail" component={DetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
