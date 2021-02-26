import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { func, string, bool } from 'prop-types';
import { connect } from 'react-redux';

import ProfilePic from '../../../../../ProfilePic';
import { scaleSize } from '../../../../../../utils/dimensions';
import Label from '../../../../../Label';

import { getArtistTopTracks, addTrackToQueue } from './utils';
import createStyles from './styles';

const ArtistInfo = ({ artistId, setSelectedId, dispatch, setQueueLoading, topTracksLoading }) => {
  const { styles, colors } = createStyles();
  const [topTracks, setTopTracks] = useState([]);
  const [selectedForQueue, setSelectedForQueue] = useState();

  const onClose = () => {
    setSelectedId('');
  };

  useEffect(() => {
    if (artistId) getArtistTopTracks(dispatch, setTopTracks, artistId);
  }, [artistId]);

  return (
    <Modal
      isVisible={!!artistId && !topTracksLoading}
      backdropColor="black"
      backdropOpacity={0.7}
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
        <TouchableWithoutFeedback>
          <View style={styles.innerContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {topTracks.map(({ trackPic, name, uri }, index) => (
                <Pressable key={index} onPress={addTrackToQueue(dispatch, uri, setSelectedForQueue)}>
                  <View style={styles.track}>
                    <ProfilePic
                      url={trackPic}
                      size={70}
                      loading={selectedForQueue === uri && setQueueLoading}
                    />
                    {!(selectedForQueue === uri && setQueueLoading) && (
                      <View style={styles.trackInfo}>
                        <Label textStyles={styles.songName}>{name}</Label>
                      </View>
                    )}
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

ArtistInfo.propTypes = {
  artistId: string,
  setSelectedId: func,
  dispatch: func,
  setQueueLoading: bool,
  topTracksLoading: bool,
};

const mapStateToProps = (store) => ({
  setQueueLoading: store?.user?.setQueueLoading,
  topTracksLoading: store?.user?.topTracksLoading
});

export default connect(mapStateToProps)(ArtistInfo);
