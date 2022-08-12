import { configureStore, ThunkAction, Action, combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authReducer from './reducers/auhtReducers'
import alertReducer from './reducers/alertReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,

})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
