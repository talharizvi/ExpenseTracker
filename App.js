import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BalanceScreen from './src/BalanceScreen/BalanceScreen';
import TransferBalanceScreen from './src/TransferBalanceScreen/TransferBalanceScreen';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider } from 'react-native-paper';
import store from './src/redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
    <PaperProvider>
    <NavigationContainer>
       <Stack.Navigator  screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Balance" component={BalanceScreen} />
        <Stack.Screen name="Transfer" component={TransferBalanceScreen} />
      </Stack.Navigator>  
    </NavigationContainer>
    </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
