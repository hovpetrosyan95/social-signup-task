import { call, put, takeLatest } from 'redux-saga/effects';
import { setData } from '../actions';
function* getData(action: Object) {
   try {
      // here will be data fetching
      console.log('imagine the data is fetched');
      const data = "The data from API";
      yield put(setData(data));
   } catch (e) {
      // failure alert
   }
}

function* saga() {
   yield takeLatest("GET_DATA", getData);
}

export default saga;