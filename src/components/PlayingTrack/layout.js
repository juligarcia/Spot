import React from 'react';
import { View } from 'react-native';
import { Bar } from 'react-native-progress';

import Label from '../Label';

import Artists from './components/Artists';
import Album from './components/Album';
import SkipButtons from './components/SkipButtons';
import { getAlbumData } from './utils';
import createStyles from './styles';

const PlayingTrack = ({ track, userLoading, loading }) => {
  const { progress, duration, name, artists, album, trackId, isPlaying } = track;
  const { styles, colors } = createStyles();

  return (
    <View style={styles.currentTrack}>
      <Album album={getAlbumData(album)} isPlaying={isPlaying} loading={userLoading || loading} />
      <View style={styles.trackInfo}>
        {trackId && (
          <>
            <Label textStyles={styles.textCenter}>{name}</Label>
            <Artists artists={artists} />
            <Bar
              unfilledColor={colors.background}
              progress={parseInt(progress, 10) / parseInt(duration, 10)}
              width={200}
              color={colors.spotifyColors.accentColor}
            />
            <SkipButtons />
          </>
        )}
      </View>
    </View>
  );
};

export default PlayingTrack;
