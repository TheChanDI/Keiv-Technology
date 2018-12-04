import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


class Login extends Component {
    render() {
        return (
                // <Input
                // label='Email:'
                // placeholderName="abc@gmail.com"
                // />
                <View style={styles.containerStyle}>
                <Text style={styles.labelStyle}>Email:</Text>
                    <TextInput 
                        placeholder="abc@gmail.com"
                        style={styles.inputStyle}
                        autoCorrect={false}
                        secureTextEntry
        
                    />
                </View>
            
             
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 40,
        width: 100,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        backgroundColor: '#e6e6e6',
        borderRadius: 5
    },
    labelStyle: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Login;