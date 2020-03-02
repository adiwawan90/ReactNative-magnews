// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableWithoutFeedback,
//   StatusBar,
//   TextInput,
//   SafeAreaView,
//   Keyboard,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   // AsyncStorage,
// } from 'react-native';
// // import styles from './styles';

const userInfo = {username: 'magnus', password: 'magnusaja'};

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }
//   static navigationOptions = {
//     headerShown: false,
//   };

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" />
//         <KeyboardAvoidingView behavior="padding" style={styles.container}>
//           <TouchableWithoutFeedback
//             style={styles.container}
//             onPress={Keyboard.dismiss}>
//             <View style={styles.logoContainer}>
//               <View style={styles.logoContainer}>
//                 <Image
//                   style={styles.logo}
//                   source={require('../../images/logoMD.png')}
//                 />
//                 <Text style={styles.title}>Login User Only</Text>
//               </View>
//               <View style={styles.infoContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Username"
//                   placeholderTextColor="rgba(255,255,255,0.8)"
//                   keyboardType="email-address"
//                   returnKeyType="next"
//                   autoCorrect={false}
//                   autoCapitalize="none"
//                   onSubmitEditing={() => this.refs.txtPassword.focus()}
//                   onChangeText={username => this.setState({username})}
//                   value={this.state.username}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Password"
//                   secureTextEntry
//                   placeholderTextColor="rgba(255,255,255,0.8)"
//                   returnKeyType="go"
//                   autoCorrect={false}
//                   ref={'txtPassword'}
//                   onChangeText={password => this.setState({password})}
//                   value={this.state.password}
//                 />
//                 <TouchableOpacity
//                   style={styles.buttonContainer}
//                   // onPress={() => alert('Login Works.!')}
//                   onPress={this._login}>
//                   <Text style={styles.buttonText}>SIGN IN</Text>
//                 </TouchableOpacity>
//                 <View style={{height: 60}} />
//               </View>
//             </View>
//           </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     );
//   }

//   _login = async () => {
//     if (
//       userInfo.username === this.state.username &&
//       userInfo.password === this.state.password
//     ) {
//       alert('Loged In Success');
//       // await AsyncStorage.setItem('isLoggedIn', '1');
//       this.props.navigation.navigate('Berita');
//     } else {
//       alert('Username or Password is incorrect.!');
//     }
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(20, 35, 70)',
//     flexDirection: 'column',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   logo: {
//     width: 235,
//     height: 56,
//   },
//   title: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//     marginTop: 5,
//     opacity: 0.8,
//     fontWeight: 'bold',
//   },
//   infoContainer: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 0,
//     height: 200,
//     padding: 20,
//     // backgroundColor: 'orange',
//   },
//   input: {
//     height: 40,
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     color: '#fff',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     borderRadius: 25,
//   },
//   buttonContainer: {
//     backgroundColor: 'rgb(10, 100, 150)',
//     paddingVertical: 15,
//     borderRadius: 25,
//     // marginBottom: 20,
//   },
//   buttonText: {
//     textAlign: 'center',
//     // color: 'rgb(32, 53, 70)',
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
  Image,
  Button,
  Animated,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import styles, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './styles';
import logo from '../../images/logoMD.png';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }
  static navigationOptions = {
    headerShown: false,
  };
  //   constructor(props) {
  //     super(props);

  //     this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  //   }

  UNSAFE_componentWillMount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowSub = Keyboard.addListener(
        'keyboardWillShow',
        this.keyboardWillShow,
      );
      this.keyboardWillHideSub = Keyboard.addListener(
        'keyboardWillHide',
        this.keyboardWillHide,
      );
    } else {
      this.keyboardWillShowSub = Keyboard.addListener(
        'keyboardDidShow',
        this.keyboardDidShow,
      );
      this.keyboardWillHideSub = Keyboard.addListener(
        'keyboardDidHide',
        this.keyboardDidHide,
      );
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  keyboardDidShow = event => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = event => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgb(20, 35, 70)',
          alignItems: 'center',
        }}>
        {/* <Animated.Image
          source={logo}
          style={[styles.logo, {height: this.imageHeight}]}
        /> */}
        <ScrollView style={{flex: 1}}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableWithoutFeedback
              style={styles.container}
              onPress={Keyboard.dismiss}>
              <View style={styles.logoContainer}>
                <Animated.Image
                  source={logo}
                  style={[styles.logo, {height: this.imageHeight}]}
                />
                <Text style={styles.title}>Login User Only</Text>
                <View style={styles.infoContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    keyboardType="email-address"
                    returnKeyType="next"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    returnKeyType="go"
                    autoCorrect={false}
                    ref={'txtPassword'}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                  />
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    // onPress={() => alert('Login Works.!')}
                    onPress={this._login}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                  </TouchableOpacity>
                  {/* <View style={{height: 60}} /> */}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
  _login = async () => {
    if (
      userInfo.username === this.state.username &&
      userInfo.password === this.state.password
    ) {
      alert('Loged In Success');
      // await AsyncStorage.setItem('isLoggedIn', '1');
      this.props.navigation.navigate('Berita');
    } else {
      alert('Username or Password is incorrect.!');
    }
  };
}

export default Demo;
