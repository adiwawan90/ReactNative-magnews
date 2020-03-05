/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import Login from './src/components/Login';
import Splash from './src/components/Splash';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};
    // console.log('start doing some task 3 s');
    setTimeout(() => {
      // console.log('Done some task setelah 3 s');
      this.setState({currentScreen: 'Login'});
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />;
    return mainScreen;
  }
}

AppRegistry.registerComponent(appName, () => App);
