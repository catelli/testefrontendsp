import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

//components
import Routes from './src/routes';



export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
