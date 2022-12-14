import { configureStore, ThunkAction, Action, combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from './reducers/auhtReducers'
import alertReducer from './reducers/alertReducer'
import { reducer as friendsReducer }  from './reducers/friendsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friend: friendsReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
