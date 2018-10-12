import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert,style} from 'react-native';

export default class Judul extends Component{
	
	render(){
		return(
			<View>
				<Text>Nama : Alief Dwi Arjuna</Text>
				<Text>No Absen : 04</Text>
				<Text>Kelas : XI RPL 2</Text>
				<Text>SMK TELKOM PURWOKERTO</Text>

			</View>

		)
	}
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#ffff',
	}
});

const warna = {
	b : {
		color : 'black',
		fontSize : 20,
		fontWeight : 'bold',
	}
}

const salon = {
	cantik : {
		color : '#000',
		fontSize : 14,
	}
}