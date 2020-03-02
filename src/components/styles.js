import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
  container: {
    // backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(20, 35, 70)',
    flexDirection: 'column',
  },
  input: {
    // height: 50,
    // backgroundColor: '#fff',
    // marginHorizontal: 10,
    // marginVertical: 5,
    // // paddingVertical: 5,
    // // paddingHorizontal: 15,
    //     height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: window.width - 30,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
    width: 235,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    opacity: 0.8,
    fontWeight: 'bold',
  },
  infoContainer: {
    // position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20,
    // backgroundColor: 'orange',
  },
  //   input: {
  //     height: 40,
  //     backgroundColor: 'rgba(255,255,255,0.2)',
  //     color: '#fff',
  //     marginBottom: 20,
  //     paddingHorizontal: 20,
  //     borderRadius: 25,
  //   },
  buttonContainer: {
    backgroundColor: 'rgb(10, 100, 150)',
    paddingVertical: 15,
    borderRadius: 25,
    // marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    // color: 'rgb(32, 53, 70)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
