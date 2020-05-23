import { Action } from '../actions';
import { Post } from '../types';

export type PostsState = {
  postList: Post[];
  postListLoaded: boolean;
  postListError: boolean;
};

const initialState: PostsState = {
  postList: [],
  postListLoaded: false,
  postListError: false,
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
        postListLoaded: true,
        postListError: false,
      };
    }
    case 'FETCH_POSTS_ERROR': {
      return {
        ...state,
        postListError: true,
      };
    }
    default: {
      return state;
    }
  }
};
