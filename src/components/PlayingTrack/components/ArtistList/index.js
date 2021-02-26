import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../../Button';

import Artist from './components/Artist';
import ArtistInfo from './components/ArtistInfo';
import { getTrackArtists } from './utils';
import createStyles from './styles';

const ArtistList = ({
  artists,
  dispatch,
  trackId,
  artistsDetails,
  currentArtistsLoading,
  topTracksLoading,
}) => {
  const [selectedId, setSelectedId] = useState();
  const [showArtist, setShowArtist] = useState(false);

  const { styles, colors } = createStyles();

  useEffect(() => {
    getTrackArtists(dispatch, artists);
  }, [trackId]);

  return (
    <View style={styles.container}>
      {currentArtistsLoading ? (
        <ActivityIndicator size="small" color={colors.foreground3} />
      ) : (
        <>
          <Button
            textStyles={styles.showArtistsButtonText}
            containerStyles={styles.showArtistsButton}
            text={showArtist ? 'Hide artists' : 'Show artists'}
            Icon={
              showArtist ? (
                <Icon name="chevron-down" color={colors.textPrimary} size={18} />
              ) : (
                <Icon name="chevron-up" color={colors.textPrimary} size={18} />
              )
            }
            onPress={() => setShowArtist(!showArtist)}
          />
          <ArtistInfo artistId={selectedId} setSelectedId={setSelectedId} />
          <Collapsible collapsed={!showArtist}>
            <ScrollView contentContainerStyle={styles.list}>
              {artistsDetails.map((artist, index) => (
                <Artist
                  key={index}
                  artist={artist}
                  setSelectedId={setSelectedId}
                  withMargin={!!index}
                  loading={selectedId === artist.id && topTracksLoading}
                />
              ))}
            </ScrollView>
          </Collapsible>
        </>
      )}
    </View>
  );
};

const mapStateToProps = (store) => ({
  artistsDetails: store?.user?.currentPlayingTrack?.artistsDetails,
  currentArtistsLoading: store?.user?.currentArtistsLoading,
  topTracksLoading: store?.user?.topTracksLoading,
});

export default connect(mapStateToProps)(ArtistList);
