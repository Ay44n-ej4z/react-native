
import {StatusBar} from 'expo-status-bar'
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import CarItem  from './components/carItems/index.js';


export default function App() {
  
   
  return (
    <View style={styles.container}>
      <CarItem />
      <StatusBar style = 'auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  
});
