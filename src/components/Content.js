import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardSection, Input} from './common';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Content extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                <Image 
                    source={require('../assets/keivtech.png')}
                    style={styles.imgStyle}
                />
                </CardSection>
                 
                <CardSection>
                   <Input
                    placeholderName="Search for Oppourtunities..."
                    />

                    
                    <TouchableOpacity style={styles.searchStyle}>
                        <Icon name="search" size={30}/>
                    </TouchableOpacity>
                   
                </CardSection>

                <CardSection>

                </CardSection>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
    imgStyle: {
        height: 100,
        flex: 1
    },
    searchStyle: {
        marginRight: 30,
        marginTop: 10
        
    }
});

export default Content;