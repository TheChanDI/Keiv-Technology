import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, CardSection, Input} from '../common';
import Login from '../Login';

class Screen2 extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text style={styles.textStyle}>LogIn</Text>
                </CardSection>
                
                <CardSection>
                   <Login />
                </CardSection>
                
  
            </Card>
        );
    }
}


const styles = StyleSheet.create({
    textStyle: {
       backgroundColor: '#66b3ff',
       height: 50,
       flex: 1,
       shadowColor: '#000',
       shadowOffset: {width: 0, height: 5},
       shadowOpacity: 0.8,
       elevation: 10,
       flex: 1,
       textAlign: 'center',
       fontSize: 30,
       paddingTop: 6,
       color:'tomato'
    }
  });
  

export default Screen2;