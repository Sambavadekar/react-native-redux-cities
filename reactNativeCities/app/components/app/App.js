/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from '../../../node_modules/react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import appStyle from './AppStyle';
import {AppContainer} from './navigators/AppStackNavigator';
import {ReduxAddAppComponentContainer} from '../cities/addList/AddCityView'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import addReducer from '../redux/addReducer'
import { createStore } from 'redux'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const TabNavigator = createBottomTabNavigator({
  Add: ReduxAddAppComponentContainer,
  Cities: AppContainer,
},
{
  header: null,
});

const AppNavigator = createAppContainer(TabNavigator);
const store = new createStore(addReducer,{cities:[]});
const App: () => React$Node = () => {
  //debugger;
  function addCity(city){
  
  }
  return (
    <Provider store={store}>
    <AppNavigator ></AppNavigator>
    </Provider>
  );
};



export default App;
