import React from 'react';
import {Text, View} from 'react-native';

class Judul extends React.Component {
	render(){
		return(
			<View>
			<Text style={salon.judul}>{this.props.title}</Text>
			</View>
		)
	}
}

const salon = {
	judul : {
		color: '#f00',
		fontSize: 50,
		fontWeight: 'bold',
		backgroundColor: '#0f0'
	}
}
export default Judul;