import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};
const middlewares = [thunk];
const isDev = process.env.NODE_ENV === 'development';

const store = createStore(
  rootReducer,
  initialState,
  isDev
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)
);

export default store;
