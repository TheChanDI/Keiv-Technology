import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TabName = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text>{props.text}</Text>
        </View>
    );
};

export default TabName;

const styles = StyleSheet.create({
    viewStyle: {
        height: 200
    }
});