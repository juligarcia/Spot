import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import TrackFeatures from './components/TrackFeatures';
import ArtistList from './components/ArtistList';
import { getTrackFeatures } from './utils';
import createStyles from './styles';
import PlayingTrack from './layout';

const PlayingTrackContainer = ({ track, dispatch, userLoading, currentTrackFeaturesLoading }) => {
  const { trackId, artists } = track;
  const { styles } = createStyles();

  useEffect(() => {
    getTrackFeatures(dispatch, trackId);
  }, [trackId]);

  return (
    <View style={styles.container}>
      <PlayingTrack track={track} userLoading={userLoading} loading={currentTrackFeaturesLoading} />
      {trackId && (!currentTrackFeaturesLoading || !userLoading) && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ArtistList artists={artists} trackId={trackId} />
          <TrackFeatures />
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = (store) => ({
  currentTrackFeaturesLoading: store?.user?.currentTrackFeaturesLoading,
});

export default connect(mapStateToProps)(PlayingTrackContainer);
