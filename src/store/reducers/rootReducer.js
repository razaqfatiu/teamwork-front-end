import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});

export default rootReducer;

// the key name will be the data property on the state object
