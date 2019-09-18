import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { withNavigation } from 'react-navigation'

class PageThree extends Component {
  render() {
    return (
      <View>
        <Text>THREE</Text>
      </View>
    )
  }
}

export default withNavigation(PageThree)