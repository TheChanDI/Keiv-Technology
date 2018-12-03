import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './src/components/common';
import Content from './src/components/Content';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerName="Home"/>
        <Content />
      </View>
    );
  }
}
     

export default App;
