
import { combineReducers } from 'redux';

const gettingData = (state = {}, action: { type: string, payload: Object }) => {
  switch (action.type) {
    case 'GET_DATA':
      // needs to be fixed
      return state;
    default:
      return state;
  }
};

const modal = (state = { isModalOpen: localStorage.getItem('user') ? false : true }, action: { type: string, payload: Object }) => {
  switch (action.type) {
    case 'CHANGE_MODAL_STATUS':
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };
    default:
      return state;
  }
};

const user = (state = {}, action: { type: string, payload: Object }) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...state,
        ...action.payload
      };
    case 'LOGOUT':
      return{};
    default:
      return state;
  }
};
export default combineReducers({
  gettingData,
  modal,
  user
})