import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


class Login extends Component {
    render() {
        return (
             <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email: abc@gmail.com"
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                   // onSubmitEditing={()=> this.password.focus()}
                    />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor = "#ffffff"
                 //   ref={(input) => this.password = input}
                            />  
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity> 
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop: 50,
        justifyContent:'center',
        alignItems: 'center'
    },
  
    inputBox: {
        height: 50,
        backgroundColor: '#d9d9d9',
        color: 'white',
        borderRadius: 50,
        width: 300,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderRadius: 50,
        borderBottomWidth: 5,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 1,
        marginBottom: 20,
    },
    button: {
        width:300,
        backgroundColor:'tomato',
        borderRadius: 25,
        height: 50,
        marginVertical: 10,
        paddingVertical: 13,
        marginTop: 30
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
    
  });

export default Login;