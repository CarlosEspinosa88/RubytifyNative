import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import PagOne from "./src/screens/PagOne";
import PagTwo from "./src/screens/PagTwo";
import PagThree from "./src/screens/PagThree";


const firstNav = createStackNavigator(
  {
    PagOne: PagOne,
    PagTwo: PagTwo,
    PagThree: PagThree
  },
  {
    initialRouteName: "PagOne"
  }
);

const AppNavigator = createStackNavigator(
  {
    firstNav: {
      screen: firstNav,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "firstNav"
  }
);

export default createAppContainer(AppNavigator);
