import React from 'react';
import {
  View, StyleSheet
} from 'react-native';
import { getArtists } from './utils';
import Label from '../../../Label';

const Artists = ({ artists }) => (
  <View style={styles.container}>
    {getArtists(artists).map((artist, index) => (
      <Label key={index} textStyles={index ? styles.featArtist : styles.mainArtist}>
        {(index === artist.length - 1) ? artist : `${artist}, `}
      </Label>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap'
  },
  mainArtist: {
    color: '#1EB954',
    fontSize: 15
  },
  featArtist: {
    color: '#D7D7D7',
    fontSize: 12
  }
});

export default Artists;