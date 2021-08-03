
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';


export default function App() {
  
   
  return (
    <View style={styles.container}>
      <View style = {styles.carContainer} > 
      {/* <ImageBackground source = {require('./assets/images/logo.png')}  /> */}
      <ImageBackground source = {require('./assets/images/ModelX.jpeg')} 
      style = {styles.image}
      />
      <View style = {styles.titles} >
        <Text style = {styles.title} >Model S</Text>
        <Text style = {styles.subTitle }>Starting at $69,216</Text>
      </View>

      </View>
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
  carContainer: {
    width: '100%',
    height: "100%"
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: "gray"
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute'
  },
  
});
