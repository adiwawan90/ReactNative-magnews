import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Splash extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {timer: 0};
    if (this._isMounted) {
      setInterval(() => {
        this.setState({timer: this.state.timer + 1});
      }, 1000);
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../images/logoMD.png')}
        />
        <Text style={styles.title}>Welcome To Magnus News</Text>
        {/* <Text style={styles.title}>{this.state.timer}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(20, 35, 70)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  logo: {
    width: 235,
    height: 56,
  },
});
