import SpotifyApi from '../../utils/SpotifyApi';
import * as userActions from '../../redux/user/actions';
import { USER_LOADING } from '../../redux/user/constants';

export const getAlbumData = (albumData) => ({
  albumName: albumData?.name,
  albumPic: albumData?.images[0].url,
});

export const getTrackFeaturesData = (apiResponse) => {
  const {
    acousticness,
    danceability,
    energy,
    instrumentalness,
    liveness,
    speechiness,
    tempo,
  } = apiResponse?.body;

  return {
    acousticness,
    danceability,
    energy,
    instrumentalness,
    liveness,
    speechiness,
    tempo,
  };
};

const getTrackFeaturesSuccess = (dispatch) => (data) => {
  dispatch(userActions.setCurrentPlayingTrackFeatures(getTrackFeaturesData(data)));
  dispatch(userActions.clearLoading(USER_LOADING.CURRENT_PLAYING_TRACK_FEATURES));
};

const getTrackFeaturesFailure = (dispatch) => () => {
  dispatch(userActions.clearLoading(USER_LOADING.CURRENT_PLAYING_TRACK_FEATURES));
};

export const getTrackFeatures = (dispatch, trackId) => {
  dispatch(userActions.setLoading(USER_LOADING.CURRENT_PLAYING_TRACK_FEATURES));
  SpotifyApi.getAudioFeaturesForTrack(trackId).then(
    getTrackFeaturesSuccess(dispatch),
    getTrackFeaturesFailure(dispatch),
  );
};
