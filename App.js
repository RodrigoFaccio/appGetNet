import {StatusBar} from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/index';
import {AuthProvider} from './src/Context/AuthProvider/LoginContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CartProvider} from './src/Context/Cart';
export default function App() {
  return (
    <NavigationContainer style={styles}>
      <SafeAreaProvider>
        <CartProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </CartProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 10,
  },
});
