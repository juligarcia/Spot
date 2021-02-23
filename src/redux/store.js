import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer as auth } from './auth/reducer';
import { reducer as user } from './user/reducer';

const store = createStore(combineReducers({ auth, user }), applyMiddleware(thunk));

export default store;
