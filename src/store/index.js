import { createStore, compose } from 'redux'
import middlewares, { sagaMiddleware } from './middlewares'
import rootReducer from '../reducers'
import rootSaga from '../sagas/index'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // eslint-disable-line
const store = createStore(
  rootReducer,
  composeEnhancers(middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;
