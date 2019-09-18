import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { withNavigation } from 'react-navigation'

class PageOne extends Component {
  render() {
    return (
      <View>
        <Text>ONE</Text>
      </View>
    )
  }
}

export default withNavigation(PageOne)
