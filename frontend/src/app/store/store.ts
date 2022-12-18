import { configureStore, ThunkAction, Action, combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from './reducers/auhtReducers'
import alertReducer from './reducers/alertReducer'
import { reducer as friendsReducer }  from './reducers/friendsReducer'
import chatReducer from './reducers/chatReducer'


const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friend: friendsReducer,
  chat: chatReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
