/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  Linking,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

class HomePage extends Component {
  static navigationOptions = {
    title: 'Magnus News App',
    headerStyle: {
      backgroundColor: '#73C6B6',
    },
  };
  static navigationOptions = {
    headerShown: false,
  };
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  clickedItem(itemValue) {
    this.props.navigation.navigate('Details', {item: itemValue});
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.containerStyle,
          {
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 15,
            marginVertical: 5,
          },
        ]}
        onPress={this.clickedItem.bind(this, item)}>
        <Image
          style={{width: 100, height: 100, borderRadius: 4, margin: 5}}
          source={{uri: item.image}}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
          {/* <Text style={{}}>{item.description}</Text> */}
          <Text style={{color: '#7a7a7a'}}>{item.sumber}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return (
      <View style={{height: 1, width: '100%', backgroundColor: 'black'}} />
    );
  };

  async componentDidMount() {
    const url = 'https://www.magnusdigital.co.id/soal/news.json';

    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        data: json.politik,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      return alert(error);
    }

    // fetch(url)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState({
    //       data: responseJson.politik,
    //       isLoading: false,
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  render() {
    return this.state.isLoading ? (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#330066" animating />
        <Text style={{fontWeight: 'bold'}}>Load Data</Text>
      </View>
    ) : (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={[styles.body, {backgroundColor: 'rgb(20, 35, 70)'}]}>
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  desc: {
    overflow: 'hidden',
    // whiteSpace: 'nowrap',
    // textOverFlow: 'elipsis',
  },
  containerStyle: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10,
  },
});

export default HomePage;
