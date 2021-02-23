import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback, Pressable } from 'react-native';
import Modal from 'react-native-modal';

import ProfilePic from '../../../../../ProfilePic';
import SpotifyApi from '../../../../../../utils/SpotifyApi';
import { scaleSize } from '../../../../../../utils/dimensions';
import Label from '../../../../../Label';

import { getTopTracksInfo } from './utils';

const ArtistInfo = ({ artistId, setSelectedId }) => {
  const [topTracks, setTopTracks] = useState([]);

  const onClose = () => {
    setSelectedId('');
  };

  useEffect(() => {
    if (artistId)
      SpotifyApi.getArtistTopTracks(artistId, 'AR').then((result) => setTopTracks(getTopTracksInfo(result)));
  }, [artistId]);

  return (
    <Modal
      isVisible={!!artistId}
      backdropColor="black"
      backdropOpacity={0.3}
      onBackdropPress={onClose}
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      style={{ margin: 0, justifyContent: 'flex-end' }}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      swipeThreshold={scaleSize(30, true)}
    >
      <View style={styles.container}>
        <View style={styles.dragBar} />
        <TouchableWithoutFeedback style={{ borderWidth: 1 }}>
          <View style={styles.innerContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {topTracks.map(({ trackPic, name, uri }) => (
                <Pressable
                  onPress={() => {
                    SpotifyApi.addToQueue(uri);
                  }}>
                  <View style={styles.track}>
                    <ProfilePic url={trackPic} size={70} />
                    <View style={styles.trackInfo}>
                      <Label textStyles={styles.songName}>{name}</Label>
                    </View>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  songName: {
    textAlign: 'center',
    fontSize: 16,
  },
  dragBar: {
    width: '70%',
    height: scaleSize(1, true),
    borderRadius: 100,
    backgroundColor: '#4B4B4B',
    marginBottom: scaleSize(2, true),
  },
  container: {
    backgroundColor: '#2E2E2E',
    height: scaleSize(80, true),
    borderRadius: 10,
    paddingTop: '5%',
    paddingBottom: '5%',
    alignItems: 'center',
    width: '100%',
  },
  trackInfo: {
    flex: 1,
    alignItems: 'center',
    margin: scaleSize(2),
  },
  track: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#3B3B3B',
    borderRadius: 5,
    marginBottom: scaleSize(2),
    padding: scaleSize(2),
    flexDirection: 'row',
  },
  innerContainer: {
    width: '90%',
  },
});

export default ArtistInfo;
