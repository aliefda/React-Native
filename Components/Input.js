import React, {Component} from 'react';
import {Platform, styleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
	render() {
	return(
		<View style={styles.container}>
		<Image
		style={{width:70, height:50}}
		source={require('./Foto/fofo.jpg')}
		/>
		<TextInput
		style={styles.inputBox}
		placeholder="Email atau No Telepon"
		/>
		<TextInput style={styles.inputBox}
		placeholder="Password"
		secureTextEntry={true} //sandi titik.....
		/>
		<TouchableOpacity style={styles.inputBox}>
			<Text style={styles.buttonText}> Masuk </Text>
		</TouchableOpacity>

		<TouchableOpacity>
		<Text> Lupa Kata Sandi? </Text>
		</TouchableOpacity>
		</View>
		)
	}
}
const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifycontent: 'center'
  },
  inputBox:{
  	width:250,
  	fontSize:13,
  	color:'#000000'
  },
  button:{
  	width:250,
  	height:40,
  	alignItems:'center',
  	justifycontent:'center',
  	color: '#000000'
  },
  button:{
  	width:250,
  	height:40,
  	alignItems:'center',
  	justifycontent:'center',
  	color: '#3B85998',
  	marginVertical:10,
  	paddingHorizontal: 80
  },

  buttonText:{
  	fontSize: 13,
  	color:'#f7f7f7',
  }
})