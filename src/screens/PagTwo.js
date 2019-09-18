import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { withNavigation } from 'react-navigation'

class PageTwo extends Component {
  render() {
    return (
      <View>
        <Text>TWO</Text>
      </View>
    )
  }
}

export default withNavigation(PageTwo)