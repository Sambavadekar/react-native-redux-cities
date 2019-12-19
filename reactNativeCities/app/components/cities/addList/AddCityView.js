import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
import {AddCityStyle} from './AddCityStyle'
import {connect} from 'react-redux'
import ActionCreators from '../../redux/actionCreators'
import Stagger from '../../animation/Stagger_Animation'

export class AddCityView extends Component {
  city={};
  
  onNewCityHandler(){
    //debugger;
    this.props.dispatch(ActionCreators.addNewCity(this.city))
  }
  updateValue(obj){
    //debugger;
    this.city = {...this.city,...obj}
  }
  render() {
    
    return (
      <View style={AddCityStyle.container}>
        <Text style={AddCityStyle.header}>Cities</Text>
        <TextInput
          style={AddCityStyle.input}
          placeholder="City"
          onChangeText={(text)=>this.updateValue({city:text})}
        />
        <TextInput
          style={AddCityStyle.input}
          placeholder="Country"
          onChangeText={(text)=>this.updateValue({country:text})}
        />
        <View style={AddCityStyle.button}><Button color="white" title="Submit" onPress={() => this.onNewCityHandler()}></Button></View>
        {/* <Stagger></Stagger> */}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
      cities: state.cities
  }
}

export const ReduxAddAppComponentContainer=connect(mapStateToProps)(AddCityView);