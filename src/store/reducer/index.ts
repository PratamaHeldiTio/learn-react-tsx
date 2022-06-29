import { IStateRedux } from '../store.types';
import actionType from './actionType';

// * init state

const initState: IStateRedux = {
  totalOrder: 0,
};

// * Reducer
const rootReducer = (state = initState, action = { type: {} }) => {
  if (action.type === actionType.PLUS_ORDER) {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }
  
  if (action.type === actionType.MINUS_ORDER) {
    let totalOrder = 0; 
    if (state.totalOrder > 0) {
      totalOrder = state.totalOrder - 1;
      return {
        ...state,
        totalOrder: totalOrder,
      };
    }
  }
  return state;
};

export default rootReducer;
