import SpotifyApi from '../../../../utils/SpotifyApi';
import * as userActions from '../../../../redux/user/actions';
import { USER_LOADING } from '../../../../redux/user/constants';

export const getArtistsDetails = (apiResponse) => {
  const { artists } = apiResponse?.body;
  return artists.map(({ images, name, id, popularity }) => ({
    profilePic: images[0].url,
    name,
    id,
    popularity,
  }));
};

const getTrackArtistsSuccess = (dispatch) => (data) => {
  dispatch(userActions.setCurrentPlayingTrackArtists(getArtistsDetails(data)));
  dispatch(userActions.clearLoading(USER_LOADING.CURRENT_PLAYING_TRACK_ARTISTS));
};

const getTrackArtistsFailure = (dispatch) => () => {
  dispatch(userActions.clearLoading(USER_LOADING.CURRENT_PLAYING_TRACK_ARTISTS));
};

export const getTrackArtists = (dispatch, artists) => {
  dispatch(userActions.setLoading(USER_LOADING.CURRENT_PLAYING_TRACK_ARTISTS));
  SpotifyApi.getArtists(artists.map((artist) => artist.id)).then(
    getTrackArtistsSuccess(dispatch),
    getTrackArtistsFailure(dispatch),
  );
};
