
import { combineReducers } from 'redux';

const data = (state = { isLoading: false, data: ""}, action: { type: string, payload: Object }) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        isLoading: true
      };
      case 'SET_DATA':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
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
  data,
  modal,
  user
})