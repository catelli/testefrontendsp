import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from  'react-redux';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

//components
import Routes from './src/routes';


import store  from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
      
     
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
