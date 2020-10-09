
import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

const gettingData = (state = {}, action: {type: string, payload: Object}) => {
    switch (action.type) {
      case 'GET_DATA':
          // needs to be fixed
        return state;
      default:
        return state;
    }
  }

export default combineReducers({
    gettingData
//   visibilityFilter
})