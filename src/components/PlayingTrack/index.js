import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Bar } from 'react-native-progress';
import { connect } from 'react-redux';

import Label from '../Label';
import SpotifyApi from '../../utils/SpotifyApi';
import { scaleSize } from '../../utils/dimensions';
import * as userActions from '../../redux/user/actions';

import Artists from './components/Artists';
import TrackFeatures from './components/TrackFeatures';
import Album from './components/Album';
import ArtistList from './components/ArtistList';
import { getAlbumData, getTrackFeatures } from './utils';

const PlayingTrack = ({ track, dispatch }) => {
  const { progress, duration, name, artists, album, trackId } = track;

  useEffect(() => {
    SpotifyApi.getAudioFeaturesForTrack(trackId).then((data) =>
      dispatch(userActions.setCurrentPlayingTrackFeatures(getTrackFeatures(data))),
    );
  }, [trackId]);

  return (
    <View style={styles.container}>
      <View style={styles.currentTrack}>
        <Album album={getAlbumData(album)} />
        <View style={styles.trackInfo}>
          <Label textStyles={styles.textCenter}>{name}</Label>
          <Artists artists={artists} />
          <Bar
            unfilledColor="#000"
            progress={parseInt(progress, 10) / parseInt(duration, 10)}
            width={200}
            color="#1EB954"
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {artists && <ArtistList artists={artists} trackId={trackId} />}
        <TrackFeatures />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  currentTrack: {
    margin: scaleSize(2),
    flexDirection: 'row',
    width: scaleSize(90),
    alignItems: 'center',
    padding: scaleSize(2),
    borderRadius: 5,
    backgroundColor: '#2E2E2E',
  },
  textCenter: {
    textAlign: 'center',
  },
  trackInfo: {
    alignItems: 'center',
    flex: 1,
    marginLeft: scaleSize(2),
  },
  artists: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainArtist: {
    color: '#1EB954',
    fontSize: 15,
  },
  featArtist: {
    color: '#D7D7D7',
    fontSize: 10,
  },
});

export default connect()(PlayingTrack);
