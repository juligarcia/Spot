const initialState = {
  profilePic: undefined,
  userName: undefined,
  currentPlayingTrack: {
    artistsDetails: [],
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_CURRENT_PLAYING_TRACK':
      return {
        ...state,
        currentPlayingTrack: {
          ...state.currentPlayingTrack,
          ...action.payload,
        },
      };
    case 'SET_CURRENT_PLAYING_ARTISTS':
      return {
        ...state,
        currentPlayingTrack: {
          ...state.currentPlayingTrack,
          artistsDetails: action.payload,
        },
      };
    case 'SET_CURRENT_PLAYING_FEATURES':
      return {
        ...state,
        currentPlayingTrack: {
          ...state.currentPlayingTrack,
          trackFeatures: action.payload,
        },
      };
    case 'SET_LOADING':
      return {
        ...state,
        [`${action.payload}Loading`]: true,
      };
    case 'CLEAR_LOADING':
      return {
        ...state,
        [`${action.payload}Loading`]: false,
      };
    default:
      return state;
  }
};
