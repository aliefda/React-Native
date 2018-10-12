import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button,Image,TouchableOpacity,Alert,True} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Judul from './Judul';

class Input extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Image source = {require('./fofo.jpg')} style={{width: 100, height: 100}}/>
      <TextInput
        style = {styles.inputBox}
        placeholder = "Telepon atau Email"
      />
      <TextInput
        style = {styles.inputBox}
        placeholder = "Password"
        secureTextEntry = {True}
     />
      <Button
        onPress = {() => this.props.navigation.navigate('Judul')}
        style = {styles.button}
        title = "Login"
        color = "#02E8B0"
      />
      </View>
    )
  }
}
const AppNavigator = createStackNavigator ({
  Input : Input,
  Judul : Judul,
},
{
  initialRouteName : 'Input',
})

export default class App extends Component<Props> {
  render() {
    return(
      <AppNavigator/>
      );
  }
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#fff',
  },

  inputBox : {
    width : 250,
    fontSize : 13,
  },

  button : {
    width : 250, 
    height: 40,
    alignItems : 'center',
    backgroundColor : '#3B5998',
    marginVertical : 10,
    paddingHorizontal : 60,
    flexDirection : 'row',
    justifyContent : 'space-between'
  }
});