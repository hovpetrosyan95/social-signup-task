import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { logger } from "redux-logger";

import rootReducer from "../reducers";

import saga from "../sagas";


const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware();

const switchMode = () => {
    if (process.env.NODE_ENV === 'development') {
      return [sagaMiddleware, logger];
    }

    return [sagaMiddleware];
  };


const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...switchMode())
    )
);

sagaMiddleware.run(saga);

export default store;
