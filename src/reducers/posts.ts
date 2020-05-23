import { Action } from '../actions';
import { Post } from '../types';

export type PostsState = {
  postList: Post[];
};

const initialState: PostsState = {
  postList: [],
};

export const postsReducer = (
  state = initialState,
  action: Action
): PostsState => {
  switch (action.type) {
    case 'FETCH_POSTS': {
      return {
        ...state,
        postList: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
