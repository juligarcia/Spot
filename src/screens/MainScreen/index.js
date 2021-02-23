import React from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';

import LogIn from './LogIn';
import Home from './Home';

const MainScreen = ({ isSignedIn }) => {
  return isSignedIn ? <Home /> : <LogIn />;
};

const mapStateToProps = (store) => ({
  isSignedIn: store.auth.isSignedIn,
});

MainScreen.propTypes = {
  isSignedIn: bool,
};

export default connect(mapStateToProps)(MainScreen);
