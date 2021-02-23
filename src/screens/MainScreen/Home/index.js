import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import PlayingTrack from '../../../components/PlayingTrack';
import * as userActions from '../../../redux/user/actions';
import SpotifyApi from '../../../utils/SpotifyApi';
import ProfilePic from '../../../components/ProfilePic';
import Label from '../../../components/Label';
import { scaleSize } from '../../../utils/dimensions';

import { getUserData, getTrackData } from './utils';

const Home = ({ dispatch, user }) => {
  useEffect(() => {
    SpotifyApi.getMe().then((data) => dispatch(userActions.setUserData(getUserData(data))));
    const timer = setInterval(() => {
      SpotifyApi.getMyCurrentPlayingTrack().then((data) =>
        dispatch(userActions.setCurrentPlayingTrack(getTrackData(data))),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { userName, profilePic, currentPlayingTrack } = user;

  return (
    <View style={styles.container}>
      <View style={styles.me}>
        <ProfilePic url={profilePic} size={100} />
        <View style={styles.userInfo}>
          <Label>{userName}</Label>
        </View>
      </View>
      {currentPlayingTrack?.isPlaying && <PlayingTrack track={currentPlayingTrack} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    height: '100%',
    padding: scaleSize(5),
  },
  me: {
    flexDirection: 'row',
    backgroundColor: '#2E2E2E',
    width: scaleSize(90),
    borderRadius: 5,
    padding: scaleSize(2),
  },
  userInfo: {
    margin: scaleSize(2),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (store) => ({
  user: store?.user,
});

export default connect(mapStateToProps)(Home);
