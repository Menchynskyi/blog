import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
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

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export default store;
