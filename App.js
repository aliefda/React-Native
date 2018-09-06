import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,pic } from 'react-native';

import Judul from './Components/Judul';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
      <Image source={pic} style={{width:100, height:100}}></Image>
      <Text>Nama  : Alief Dwi Arjuna</Text>
      <Text>Kelas : XI RPL 2</Text>
      <Text>Absen : 04</Text>
      <Image style={{width: 250, height: 250}}
      source={require('./Foto/fofo.jpg' )} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: "red",
  },
  Welcome:{
    fontSize:20,
    textAlign:"center",
    margin: 5,
    color: '#0f0',
  },
  
});