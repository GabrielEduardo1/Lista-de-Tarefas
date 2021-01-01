import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AppLoading from 'expo';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts, Lato_900Black } from '@expo-google-fonts/lato';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TouchableHighlight, Modal, ScrollView, TextInput } from 'react-native';


export default function App() {

  //Disabilita as Mensagens de Warning do aplicativo
  console.disableYellowBox = true;

  //Pegando a imagem na pasta de images
  const image = require('./images/bg.jpg');

  //Array com as Tarefas
  const [tarefas, setarTarefas] = useState([
   
    
  ]);

  const [modal, setModal] = useState(false);
  const [tarefaAtual,setTarefaAtual] = useState('');


  //Salvando a font importada em uma let
  let [fontsLoaded] = useFonts({
    Lato_900Black,
  });

  //Caso a fonte não renderizar, aparece esse Text, para informar que enta Carregando
  if (!fontsLoaded) {
    return <Text>Carregando...</Text>
  }

  //Função utilizada para deletar a tarefa
  function deletarTarefa(id){
    alert('Tarefa '+id+' Foi deletada');
    let newTarefas = tarefas.filter(function(val){
      return val.id != id;
    });
    setarTarefas(newTarefas);
  }

  //Função ultilizada para Adicionar uma tarefa
  function addTarefa(){
    
    setModal(!modal);

    let id = 0;
    if(tarefas.length > 0){
        id = tarefas[tarefas.length-1].id + 1;
    }

    let tarefa = {id:id,tarefa:tarefaAtual};

    setarTarefas([...tarefas,tarefa]);
    
    
  }
  
  return (
    <View style={{flex:1, }}>
      <ScrollView>
        <StatusBar hidden/>

        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <TextInput onChangeText={
                text => setTarefaAtual(text)
              } autoFocus={true} ></TextInput>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => 
                (setarTarefas() != '')
                ? 
                  addTarefa()
                :
                  alert('adiciione uma tarefas')
                }
              >

                <Text style={styles.textStyle}>Adicionar Tarefa</Text>

              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <ImageBackground source={image} style={styles.image}>
          <View style={styles.coverView}>
            <Text style={styles.textHeader}>LISTA DE TAREFAS</Text>
          </View> 
        </ImageBackground>
        
        {
        tarefas.map(function(val){
          return(
          <View style={styles.tarefaSingle}>
            <View style={{flex:1, width:'100%', padding:10}}>
              <Text>
                {val.tarefa}
              </Text>
            </View>
            <View style={{alignItems:'flex-end', flex:1, padding:10, }}>
              <TouchableOpacity onPress={() => deletarTarefa(val.id)}><AntDesign name="minuscircleo" size={24} color="black" /></TouchableOpacity>
            </View>
          </View>);
        })
        }
      </ScrollView> 
          <TouchableOpacity onPress={()=>setModal(true)} style={styles.botaoAdicionar}><Text style={styles.botaoText}>+</Text></TouchableOpacity>
        
    </View>
    
  );}


const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width:'100%',
    height:100,
  },
  coverView:{
    width:'100%',
    height:100,
    backgroundColor:'rgba(0,0,0,0.6)',
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
  },
  botaoAdicionar:{
    position:'absolute',
    right:20,
    bottom:20,
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'gray',
  },
  botaoText:{
    color:'white',
    fontSize:30,
    textAlign:'center',
    position:'relative',
  },
  //Estilos da Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex:5
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
