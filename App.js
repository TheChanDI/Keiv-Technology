import React, {Component} from 'react';
import {View} from 'react-native';
import Screen1 from './src/components/Screen/Screen1';
import Screen2 from './src/components/Screen/Screen2';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Screen1 />
      </View>
        
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Screen2 />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
  // Home: { screen: HomeScreen },
  // Settings: { screen: SettingsScreen },
    Home: HomeScreen,
    LogIn: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'LogIn') {
          iconName = 'sign-in-alt';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',  
    },
  }

);

export default createAppContainer(TabNavigator);