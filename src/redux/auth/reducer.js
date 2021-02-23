const initialState = {
  accessToken: undefined,
  refreshToken: undefined
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOG_IN_CREDS':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
