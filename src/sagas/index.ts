import { call, put, takeLatest } from 'redux-saga/effects';
function* getData (action: Object) {
   try {
      // here will be data fetching
   } catch (e) {
      // failure alert
   }
}

function* saga() {
  yield takeLatest("GET_DATA", getData);
}

export default saga;