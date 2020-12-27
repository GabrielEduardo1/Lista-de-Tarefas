import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';


export default function App() {

  const image = require('./images/bg.jpg')
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden/>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>LISTA DE TAREFAS</Text>
        </View> 
      </ImageBackground>

      <View style={styles.tarefaSingle}>
        <View style={{flex:1, width:'100%', padding:10}}>
          <Text>Minha Tarefa do dia 1</Text>
        </View>
        <View style={{alignItems:'flex-end', flex:1, padding:10}}>
          <TouchableOpacity><AntDesign name="minuscircleo" size={24} color="black" /></TouchableOpacity>
        </View>
      </View>
      

    </ScrollView>
  );}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
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
    marginTop:30,
    fontFamily:'Lato_900Black',
  },
  tarefaSingle:{
    marginTop:30,
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:'black',
    flexDirection:'row',
    paddingBottom:10
  }
});
