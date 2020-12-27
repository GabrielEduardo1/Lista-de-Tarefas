import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default function App() {

  const image = require('./images/bg.jpg')

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>LISTA DE TAREFAS</Text>
        </View> 
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width:'100%',
    height:100,
  },
  coverView:{
    width:'100%',
    height:100,
    backgroundColor:'rgba(0,0,0,0.6)'
  },
  textHeader:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    marginTop:30
  }
});
