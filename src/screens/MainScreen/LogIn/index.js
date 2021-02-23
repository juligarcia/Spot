import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import * as authActions from '../../../redux/auth/actions';
import SpotifyApi from '../../../utils/SpotifyApi';
import authHandler from '../../../utils/AuthenticationHandler';
import Button from '../../../components/Button';
import Label from '../../../components/Label';

import createStyles from './styles';

const LoginScreen = ({ dispatch }) => {
  const { styles } = createStyles();

  const handleLoggedIn = (creds) => {
    SpotifyApi.setAccessToken(creds.accessToken);
    dispatch(authActions.setLogInCredentials(creds));
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Label textStyles={styles.title}>Spot •</Label>
        <Label>A Spotify music analyst</Label>
      </View>
      <Button text="LOG IN" onPress={() => authHandler.onLogin(handleLoggedIn)} />
    </View>
  );
};

LoginScreen.propTypes = {
  dispatch: func,
};

export default connect()(LoginScreen);
