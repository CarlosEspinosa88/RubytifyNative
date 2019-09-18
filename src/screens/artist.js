import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';



import ArtistList from '../components/artist-list';

class App extends Component {
  state = {
    loading: false,
    error: null,
    data: undefined,
  }

  componentDidMount() {
    this.obtenerArtistas()
  }

  obtenerArtistas = async () => {
    this.setState({ loading: true })

    try {
      const data = await fetch('https://rubytify.herokuapp.com/api/v1')
      const artists = await data.json()
      this.setState({ loading: false, error: null, data: artists.data })
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <SafeAreaView>
          <View>
            <Text>Descargando artistas</Text>
          </View>
        </SafeAreaView>
      )
    }

    return (
      <SafeAreaView>
        <ArtistList
          artists={this.state.data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </SafeAreaView>
    );
  }
}

export default App