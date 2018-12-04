import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const Input = (props) => {
    return (
        <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{props.label}</Text>
            <TextInput 
                placeholder={props.placeholderName}
                value={props.value}
                onChangeText={props.onChangeText}
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry={props.secureTextEntry}

            />
        </View>
    );
};

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

export {Input};