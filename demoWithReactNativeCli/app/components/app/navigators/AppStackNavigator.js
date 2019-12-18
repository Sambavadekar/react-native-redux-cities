
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {ReduxListComponentContainer} from '../../cities/listView/ListView'
import {CityDetails} from '../../cities/details/CityDetails'

const RootStack = createStackNavigator(
    {
      List: ReduxListComponentContainer,
      Details: CityDetails,
    },
    {
      initialRouteName: 'List',
      /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#1875D2",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
  );
  
export const AppContainer = createAppContainer(RootStack);