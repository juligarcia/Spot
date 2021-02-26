export const setUserData = (payload) => ({
  type: 'SET_USER_DATA',
  payload,
});

export const setCurrentPlayingTrack = (payload) => ({
  type: 'SET_CURRENT_PLAYING_TRACK',
  payload,
});

export const setCurrentPlayingTrackArtists = (payload) => ({
  type: 'SET_CURRENT_PLAYING_ARTISTS',
  payload,
});

export const setCurrentPlayingTrackFeatures = (payload) => ({
  type: 'SET_CURRENT_PLAYING_FEATURES',
  payload,
});

export const setLoading = (payload) => ({
  type: 'SET_LOADING',
  payload,
});

export const clearLoading = (payload) => ({
  type: 'CLEAR_LOADING',
  payload,
});
