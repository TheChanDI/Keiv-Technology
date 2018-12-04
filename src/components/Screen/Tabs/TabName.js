import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TabName = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={{fontSize: 20, color: '#ff4d4d', paddingRight: 50}}>INTERNSHIP</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TabName;