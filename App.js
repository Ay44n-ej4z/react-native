import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import pic from "./assets/favicon.png"

export default function App() {
  const menus = [
    {
      _id: "5f1c2cf788c5e8bfc63e85d4",
      title: "Electronics",
      parent: "/",
      category: "/electronics"
    },
    {
      _id: "5f1c2d0e88c5e8bfc63e85d5",
      title: "Headphones",
      parent: "/electronics",
      category: "/electronics/headphones"
    },
    {
      _id: "5f1c2d1888c5e8bfc63e85d6",
      title: "Television",
      parent: "/electronics",
      category: "/electronics/television"
    },
  {
      _id: "5f1c2d2088c5e8bfc63e85d7",
      title: "Mobile",
      parent: "/electronics",
      category: "/electronics/mobiles"
    },
    {
      _id: "5f1c2d4288c5e8bfc63e85d8",
      title: "Samsung",
      parent: "/electronics/mobiles",
      category: "/electronics/mobiles/samsung"
    },
    {
      _id: "5f1c2d4288c5e8bfc63e85d8",
      title: "Redmi",
      parent: "/electronics/mobiles",
      category: "/electronics/mobiles/redmi"
    },
  {
      _id: "5f1c2cf788c5e8bfc63e85d4",
      title: "Fashion",
      parent: "/",
      category: "/fashion"
    },
    {
      _id: "5f1c2cf788c5e8bfc63e85d4",
      title: "Men",
      parent: "/fashion",
      category: "/fashion/men"
    },
    {
      _id: "5f1c2cf788c5e8bfc63e85d4",
      title: "Women",
      parent: "/fashion",
      category: "/fashion/women"
    }
    
  ];
   
  return (
    <View style={styles.container}>
      <Image source = {pic}  />
      <Text >
        {menus.map(menu => 
          <Text >
            {menu.parent == "/electronics"}
          </Text>
        )}

      </Text>
      <StatusBar style="auto" />
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
