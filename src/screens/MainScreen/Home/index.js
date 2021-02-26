import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import PlayingTrack from '../../../components/PlayingTrack';
import ProfilePic from '../../../components/ProfilePic';
import Label from '../../../components/Label';

import { setCurrentTrackPolling, getUser } from './utils';
import createStyles from './styles';

const Home = ({ dispatch, user }) => {
  const { styles } = createStyles();

  const { userName, profilePic, currentPlayingTrack, userLoading } = user;

  useEffect(() => {
    getUser(dispatch);
    const timer = setCurrentTrackPolling(dispatch);
    return () => clearInterval(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.me}>
        <ProfilePic url={profilePic} size={100} loading={userLoading} />
        <View style={styles.userInfo}>
          <Label>{userName}</Label>
        </View>
      </View>
      <PlayingTrack track={currentPlayingTrack} userLoading={userLoading} />
    </SafeAreaView>
  );
};

Home.propTypes = {
  dispatch: func,
};

const mapStateToProps = (store) => ({
  user: store?.user,
});

export default connect(mapStateToProps)(Home);
