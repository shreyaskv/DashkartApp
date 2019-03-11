import { combineReducers } from 'redux';

//import { authentication } from './users.reducer';
import { alert } from './alert.reducer';
import { homePage } from './homePage.reducer';

const rootReducer = combineReducers({
  alert,
  homePage,
});

export default rootReducer;