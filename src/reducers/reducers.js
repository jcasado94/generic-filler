import { combineReducers } from 'redux';
import {
  ADD_USAGE,
  REMOVE_USAGE,
  SET_USAGES
} from '../actions/actions';


const usages = (state = {prodUsages: []}, action) => {
  switch (action.type) {
    case ADD_USAGE:
      return {
        prodUsages: [
          ...state.prodUsages, 
          action.usageId
        ]
      }
    case REMOVE_USAGE:
      return {
        prodUsages: [
          ...state.prodUsages.slice(0, action.i),
          ...state.prodUsages.slice(action.i+1)
        ]
      }
    case SET_USAGES:
      return {
        prodUsages: action.prodUsages
      }
    default:
      return state;
  }
};

const app = combineReducers({
  usages
});

export default app;