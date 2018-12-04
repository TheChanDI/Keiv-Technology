import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TabName1 = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={{fontSize: 20, color: '#ff4d4d'}}>JOBS</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TabName1;