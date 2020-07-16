import { combineReducers } from 'redux';
import campaignsReducer from './campaign/reducer';

const allReducers = combineReducers({
  campaigns: campaignsReducer
});

export default allReducers;
