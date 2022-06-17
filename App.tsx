import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "./firebaseconfig"


export default function App() {

  const [prices, setPrices] = useState(0)
  

  const database = firebase.firestore()

  const getSumPrices  = database.collection('finances')
  .onSnapshot(querySnapshot => {
    const data  = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    }) 
    const prices = data.map((item)=>{
      return (
        item.price
      )
    })
    
    let total = prices.reduce((total, prices) => total + prices, 0);
    setPrices(total)
    return () => getSumPrices();
  })
  return (
    <View style={styles.container}>
      <Text>R$ 
        {prices !== 0 ? prices.toFixed(2) : "Buscando dados..."}
      </Text>
      <StatusBar style="auto" />


    </View>
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
