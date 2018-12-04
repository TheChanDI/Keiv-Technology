import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = (props) => {
    return (
        <View style={styles.textStyle}>
          <TouchableOpacity>
             <Icon name="bars" size={30} color="tomato"/>
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        backgroundColor: '#66b3ff',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.8,
        elevation: 10,
        flex: 1,
        padding: 5,

    }
  });
  

export {Header};