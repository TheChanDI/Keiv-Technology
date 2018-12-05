import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Login from '../Login';
import Logo from '../Logo';


class Screen2 extends Component {
    render() {
       

        return (
          <View style={styles.container}>

          <View style={styles.s1}>
              <Logo />
          </View>

          <Login type="Login" />
         

          <View style={styles.s3}>
          <Text style={styles.txt1}>Don't have an account yet?</Text>
          <TouchableOpacity>
              <Text style={styles.txt2}>Signup</Text>
          </TouchableOpacity>
          
          </View>
            
          </View>
			
        );
    }
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(102, 179, 255, .8)'
    },
    s2:{
        marginTop: '50',
       justifyContent: 'center',
       alignItems: 'center' 
    },
    s3:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20
    },
    txt1:{
        color:'tomato',
        fontSize: 15
      },
    txt2:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
      }
});
  

export default Screen2;