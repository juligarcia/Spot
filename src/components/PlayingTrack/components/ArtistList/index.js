import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Feather';

import SpotifyApi from '../../../../utils/SpotifyApi';
import * as userActions from '../../../../redux/user/actions';
import { scaleSize } from '../../../../utils/dimensions';
import Button from '../../../Button';

import Artist from './components/Artist';
import ArtistInfo from './components/ArtistInfo';
import { getArtistsDetails } from './utils';

const ArtistList = ({ artists, dispatch, trackId, artistsDetails }) => {
  const [selectedId, setSelectedId] = useState();
  const [showArtist, setShowArtist] = useState(false);

  useEffect(() => {
    SpotifyApi.getArtists(artists.map((artist) => artist.id)).then((result) =>
      dispatch(userActions.setCurrentPlayingTrackArtists(getArtistsDetails(result))),
    );
  }, [trackId]);

  return (
    <View style={styles.container}>
      <Button
        textStyles={styles.showArtistsButtonText}
        containerStyles={styles.showArtistsButton}
        text={showArtist ? 'Hide artists' : 'Show artists'}
        Icon={
          showArtist ? (
            <Icon name="chevron-down" color="white" size={18} />
          ) : (
            <Icon name="chevron-up" color="white" size={18} />
          )
        }
        onPress={() => setShowArtist(!showArtist)}
      />
      <ArtistInfo artistId={selectedId} setSelectedId={setSelectedId} />
      <Collapsible collapsed={!showArtist}>
        <ScrollView>
          {artistsDetails.map((artist, index) => (
            <Artist artist={artist} setSelectedId={setSelectedId} withMargin={!!index} />
          ))}
        </ScrollView>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  showArtistsButton: {
    backgroundColor: '#3B3B3B',
    borderRadius: 5,
    marginBottom: scaleSize(2),
  },
  showArtistsButtonText: {
    fontSize: 16,
  },
  container: {
    backgroundColor: '#2E2E2E',
    borderRadius: 5,
    width: scaleSize(90),
    padding: scaleSize(2),
    maxHeight: scaleSize(50, true),
  },
});

const mapStateToProps = (store) => ({
  artistsDetails: store?.user?.currentPlayingTrack?.artistsDetails,
});

export default connect(mapStateToProps)(ArtistList);
