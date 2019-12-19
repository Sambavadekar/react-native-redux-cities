import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';
import ButtonStyle from './ButtonStyle';


export const Button: () => React$Node = () => {
  //debugger;
  return (
    <TouchableHighlight>
        <Text>Hello</Text>
    </TouchableHighlight>
  );
};


