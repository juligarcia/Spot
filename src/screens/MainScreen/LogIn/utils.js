import * as authActions from '../../../redux/auth/actions';
import { AUTH_LOADING } from '../../../redux/auth/constants';
import SpotifyApi from '../../../utils/SpotifyApi';
import authHandler from '../../../utils/AuthenticationHandler';

const handleLoggedIn = (dispatch) => (creds) => {
  SpotifyApi.setAccessToken(creds.accessToken);
  dispatch(authActions.setLogInCredentials(creds));
  dispatch(authActions.clearLoading(AUTH_LOADING.LOG_IN));
};

const handleFailedLogIn = (dispatch) => () => {
  dispatch(authActions.clearLoading(AUTH_LOADING.LOG_IN));
};

export const handleLogIn = (dispatch) => () => {
  dispatch(authActions.setLoading(AUTH_LOADING.LOG_IN));
  authHandler.onLogin(handleLoggedIn(dispatch), handleFailedLogIn(dispatch));
};
