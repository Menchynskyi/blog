import { Action } from '../actions';
import { Post } from '../types';

export type PostsState = {
  posts: Post[];
};

const initialState: PostsState = {
  posts: [],
};

export const postsReducer = (
  state = initialState,
  action: Action
): PostsState => {
  switch (action.type) {
    case 'FETCH_POSTS': {
      return {
        ...state,
        posts: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
