import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {CityDetailsStyle} from './CityDetailsStyle'

export class CityDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('city', 'NO-City') 
  });
  render() {
    const { navigation } = this.props;
    return (
      <View style={CityDetailsStyle.container}>
        <Text>{navigation.getParam('city', 'NO-City')} </Text>
        <Text>{navigation.getParam('country', 'NO-Country')} </Text>
      </View>
    );
  }
}