import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = (props) => {
    return (
        <View style={styles.textStyle}>
          <View>
          <TouchableOpacity>
            <Icon name="bars" size={30} color="#ffa64d"/>
          </TouchableOpacity>
          </View>
        </View>
    );
}
const styles = StyleSheet.create({
    textStyle: {
        backgroundColor: '#66b3ff',
        height: 50,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.8,
        elevation: 5,
       
        fontSize: 20,
        color: 'black'
    }
  });
  

export {Header};