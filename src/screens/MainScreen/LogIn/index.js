import React from 'react';
import { View, ActivityIndicator, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

import Button from '../../../components/Button';
import Label from '../../../components/Label';

import createStyles from './styles';
import { handleLogIn } from './utils';

const LoginScreen = ({ dispatch, logInLoading }) => {
  const { styles, colors } = createStyles();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Label textStyles={styles.title}>Spot •</Label>
        <Label>A Spotify music analyst</Label>
      </View>
      <Button disabled={logInLoading} containerStyles={styles.button} onPress={handleLogIn(dispatch)}>
        {logInLoading ? (
          <ActivityIndicator size="small" color={colors.spotifyColors.textColor} />
        ) : (
          <Label textStyles={styles.buttonLabel}>LOG IN</Label>
        )}
      </Button>
    </SafeAreaView>
  );
};

LoginScreen.propTypes = {
  dispatch: func,
  logInLoading: bool,
};

const mapStateToProps = (store) => ({
  logInLoading: store?.auth?.logInLoading,
});

export default connect(mapStateToProps)(LoginScreen);
