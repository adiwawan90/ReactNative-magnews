import React, {Component} from 'react';
import {ScrollView, View, Text, Image, Linking} from 'react-native';

class Details extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    const item = this.props.navigation.state.params.item;
    console.log(item.image);
    return (
      <ScrollView>
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
          <View style={{position: 'relative'}}>
            <Image
              source={{uri: item.image}}
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
                {item.sumber}
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
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'normal',
                color: '#4a4a4a',
                marginBottom: 11,
              }}>
              {item.description}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: 'lightblue',
                marginBottom: 11,
              }}
              onPress={() => Linking.openURL(item.link)}>
              view more on original source >>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Details;
