import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { string, shape, bool } from 'prop-types';

import ProfilePic from '../../../ProfilePic';

import createStyles from './styles';

const Album = ({ album, isPlaying, loading }) => {
  const { colors, styles } = createStyles();

  return (
    <View style={styles.container}>
      {isPlaying ? (
        <ProfilePic url={album.albumPic} size={100} />
      ) : loading ? (
        <ActivityIndicator color={colors.background} size="large" />
      ) : (
        <Icon name="pause" color={colors.foreground3} size={50} />
      )}
    </View>
  );
};

Album.propTypes = {
  album: shape({
    albumPic: string,
    albumName: string,
  }),
  isPlaying: bool,
};

export default Album;
