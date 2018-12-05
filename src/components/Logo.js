import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image 
} from 'react-native';

class Logo extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:100, height: 100}}
          			source={require('../assets/keivtech.png')}/>
          		<Text style={styles.logoText}>Welcome to Keiv Family</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    justifyContent:'center',
		alignItems: 'center',
	
  },
  logoText : {
  	fontSize:30,
		color: 'tomato',
		textDecorationLine: 'underline',
		textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2
  }
});

export default Logo;