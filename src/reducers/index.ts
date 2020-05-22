import { combineReducers } from 'redux';
import { postsReducer, PostsState } from './posts';

export type RootState = PostsState;

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
