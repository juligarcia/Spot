import React from 'react';
import { View } from 'react-native';

import Label from '../../../Label';

import { getArtists } from './utils';
import createStyles from './styles';

const Artists = ({ artists }) => {
  const { styles } = createStyles();
  return (
    <View style={styles.container}>
      {getArtists(artists).map((artist, index) => (
        <Label key={index} textStyles={index ? styles.featArtist : styles.mainArtist}>
          {index === artists.length - 1 ? artist : `${artist},`}
        </Label>
      ))}
    </View>
  );
};

export default Artists;
