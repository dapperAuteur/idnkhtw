import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import fourLetterWordReducer from './fourLetterWordReducer';
import gameReducer from './gameReducer';
import prefixSuffixRootReducer from './prefixSuffixRootReducer';
import userReducer from './userReducer';
import verboReducer from './verboReducer';



const rootReducer = combineReducers({
  currentUser,
  errors,
  fourLetterWordReducer,
  gameReducer,
  prefixSuffixRootReducer,
  userReducer,
  verboReducer
});

export default rootReducer;
