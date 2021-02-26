const initialState = {
  accessToken: undefined,
  refreshToken: undefined,
  logInLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOG_IN_CREDS':
      return {
        ...state,
        ...action.payload,
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
