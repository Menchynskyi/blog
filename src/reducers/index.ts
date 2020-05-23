import { combineReducers } from 'redux';
import { postsReducer, PostsState } from './posts';

export type RootState = {
  posts: PostsState;
};

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
