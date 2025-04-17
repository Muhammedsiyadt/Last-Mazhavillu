import { combineReducers } from 'redux';
import { user } from './users.reducer';
import { menu } from './menu.reducer';
import { customer } from './customer.reducer';
import { company } from './company.reducer';


const rootReducer = combineReducers({
  company,
  user,
  customer,
  menu
});

export default rootReducer;