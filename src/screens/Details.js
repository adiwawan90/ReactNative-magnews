import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Details extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.state.params.item,
      isLoading: true,
    };
  }

  componentDidMount() {
    if (this.state.item) {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    // const item = this.props.navigation.state.params.item;
    // console.log(item.image);
    return this.state.isLoading ? (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#330066" animating />
        <Text style={{fontWeight: 'bold'}}>Load Data</Text>
      </View>
    ) : (
      <ScrollView style={{backgroundColor: 'rgb(20, 35, 70)'}}>
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 10,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 4,
            paddingBottom: 10,
          }}>
          <View
            style={{
              paddingTop: 10,
              paddingHorizontal: 5,
            }}>
            <View style={{position: 'relative'}}>
              <Image
                source={{uri: this.state.item.image}}
                style={{height: 220, width: '100%', borderRadius: 6}}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: 'black',
                  opacity: 0.1,
                  borderRadius: 6,
                }}
              />
              <View
                style={{
                  height: 5,
                  width: 100,
                  position: 'absolute',
                  top: 10,
                  left: 16,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {this.state.item.sumber}
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                borderBottomColor: '#4a4a4a',
                borderBottomWidth: 2,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1c1c1c',
                  marginBottom: 10,
                }}>
                {this.state.item.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#4a4a4a',
                  marginBottom: 11,
                }}>
                {this.state.item.description}
              </Text>
              <TouchableOpacity
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'lightblue',
                  marginBottom: 11,
                  width: 180,
                  height: 20,
                  // backgroundColor: 'blue',
                }}
                onPress={() => Linking.openURL(this.state.item.link)}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#330066',
                    textAlign: 'center',
                  }}>
                  view more on original source >>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Details;
