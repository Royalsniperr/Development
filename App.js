/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator,StyleSheet,ListView,Platform } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import {StackNavigator} from 'react-navigation';
import Xwall from './app/components/Xwall/Xwall';
import Home from './app/components/Home/Home';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const NavigationApp= StackNavigator({

  Xwall:{screen:Xwall},
  Home:{screen:Home}



});

// export default class App extends Component {

//   render() {
//     return (
//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>
//       //    how are your
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     To get started, edit App.js
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     {instructions}
//       //   </Text>
//       // </View>


      
//       <Xwall/>
//     );
//   }
// }
export default NavigationApp;


