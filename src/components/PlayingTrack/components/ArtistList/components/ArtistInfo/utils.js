import SpotifyApi from '../../../../../../utils/SpotifyApi';
import * as userActions from '../../../../../../redux/user/actions';
import { USER_LOADING } from '../../../../../../redux/user/constants';

export const getTopTracksInfo = (apiResponse) => {
  const { tracks } = apiResponse?.body;

  return tracks.map(({ album, name, external_urls: url, id, uri }) => ({
    trackPic: album?.images[0]?.url,
    name,
    url: url.spotify,
    uri,
  }));
};

const getArtistTopTracksSuccess = (dispatch, setTopTracks) => (data) => {
  dispatch(userActions.clearLoading(USER_LOADING.TOP_TRACKS));
  setTopTracks(getTopTracksInfo(data));
};

const getArtistTopTracksFailure = (dispatch) => () => {
  dispatch(userActions.clearLoading(USER_LOADING.TOP_TRACKS));
};

export const getArtistTopTracks = (dispatch, setTopTracks, artistId) => {
  dispatch(userActions.setLoading(USER_LOADING.TOP_TRACKS));
  SpotifyApi.getArtistTopTracks(artistId, 'AR').then(
    getArtistTopTracksSuccess(dispatch, setTopTracks),
    getArtistTopTracksFailure(dispatch),
  );
};

const addTrackToQueueSuccess = (dispatch) => () => dispatch(userActions.clearLoading(USER_LOADING.SET_QUEUE));
const addTrackToQueueFailure = (dispatch) => () => dispatch(userActions.clearLoading(USER_LOADING.SET_QUEUE));

export const addTrackToQueue = (dispatch, uri, setSelectedForQueue) => () => {
  setSelectedForQueue(uri);
  dispatch(userActions.setLoading(USER_LOADING.SET_QUEUE));
  SpotifyApi.addToQueue(uri).then(addTrackToQueueSuccess(dispatch), addTrackToQueueFailure(dispatch));
};
