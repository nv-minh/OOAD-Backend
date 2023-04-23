import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { persistReducer } from 'redux-persist';
import userReducer from './userReducer';
import authReducer from './authReducer';
import { IAuth } from '../../interface';
import postReducer from './postReducer';
import appReducer from './appReducer';
import { RootStateAuth } from '../interface';

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonConfig,
  key: 'auth',
  whitelist: ['isLoggedIn', 'accessToken'],
};
// TODO: fix type action
const rootReducer = combineReducers({
  auth: persistReducer<RootStateAuth, any>(authConfig, authReducer),
  user: userReducer,
  posts: postReducer,
  app: appReducer,
});

export default rootReducer;
