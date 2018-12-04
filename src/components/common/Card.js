import React from 'react';
import {View, StyleSheet} from 'react-native';


const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 2,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        margin: 0,
        padding: 0
    }
});

export { Card };