import * as userActions from '../../../redux/user/actions';
import { USER_LOADING } from '../../../redux/user/constants';
import SpotifyApi from '../../../utils/SpotifyApi';

export const getUserData = (apiResponse) => ({
  profilePic: apiResponse?.body?.images[0]?.url,
  userName: apiResponse?.body?.display_name,
});

export const getTrackData = (apiResponse) => {
  if (!apiResponse?.body) return {};

  const { item, progress_ms: progress, is_playing: isPlaying } = apiResponse?.body;
  const {
    album,
    artists,
    duration_ms: duration,
    name,
    explicit,
    preview_url: previewUrl,
    id: trackId,
  } = item;

  return {
    progress,
    duration,
    artists,
    name,
    explicit,
    previewUrl,
    album,
    trackId,
    isPlaying,
  };
};

export const setCurrentTrackPolling = (dispatch) =>
  setInterval(() => {
    SpotifyApi.getMyCurrentPlayingTrack().then((data) =>
      dispatch(userActions.setCurrentPlayingTrack(getTrackData(data))),
    );
  }, 1000);

const getUserSuccess = (dispatch) => (data) => {
  dispatch(userActions.setUserData(getUserData(data)));
  dispatch(userActions.clearLoading(USER_LOADING.USER));
};

const getUserFailure = (dispatch) => (data) => {
  dispatch(userActions.clearLoading(USER_LOADING.USER));
};

export const getUser = (dispatch) => {
  dispatch(userActions.setLoading(USER_LOADING.USER));
  SpotifyApi.getMe().then(getUserSuccess(dispatch), getUserFailure(dispatch));
};
