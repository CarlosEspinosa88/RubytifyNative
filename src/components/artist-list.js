import React from "react";
import {
  Text,
  View,
} from 'react-native';

class ArtistList extends React.Component {
	render() {
		if (this.props.artists === undefined) {
			return (
        <View>
          <Text>No hay artistas</Text>
        </View>
      )
		}
		return (
    <View>
			{this.props.artists.map(artist => {
        return(
          <View key={artist.id}>
            <Text>
              {artist.name}
            </Text>
          </View>
        );
      })}
    </View>
		)
	}
}

export default ArtistList;
