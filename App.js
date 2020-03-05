import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/components/Login';
import Home from './src/screens/HomePage';
import Splash from './src/components/Splash';
import Details from './src/screens/Details';

const RootStack = createAppContainer(
  createStackNavigator(
    {
      Login: {screen: Login},
      Berita: {screen: Home},
      Details: {screen: Details},
    },
    {
      initialRouteName: 'Login',
      defaultNavigationOption: {
        headerStyle: {
          backgroundColor: '#1e90ff',
          opacity: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      },
    },
  ),
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};
    console.log('start doing some task 3 s');
    setTimeout(() => {
      console.log('Done some task setelah 3 s');
      this.setState({currentScreen: 'Login'});
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <RootStack />;
    return mainScreen;
  }
  // render() {
  //   return <RootStack />;
  // }
}
