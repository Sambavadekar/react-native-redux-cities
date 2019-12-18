import React, { Component } from 'react';
import { FlatList, TouchableHighlight, Text, View } from 'react-native';
import {ListStyle} from './ListViewStyle'
import {connect} from 'react-redux'

export class ListView extends Component {
  cities = [
    {city:"Paris",country:"France"},
    {city:"Bangalore",country:"India"}
  ];
  static navigationOptions = {
    title: 'List',
  };
  render() {
    //debugger;
    return (
      <View style={ListStyle.container}>
        <FlatList
          data={this.props.cities}
          renderItem={({item}) => <TouchableHighlight onPress={() => this.props.navigation.navigate('Details',item)}>
            <View><Text style={ListStyle.itemTitle}>{item.city}</Text>
            <Text style={ListStyle.itemSubTitle}>{item.country}</Text></View>
            </TouchableHighlight>}
            keyExtractor={(item, index) => index.toString()}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={ListStyle.separator} />}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
      cities: state.cities
  }
}

export const ReduxListComponentContainer=connect(mapStateToProps)(ListView);