import { Action } from '../actions';
import { Post } from '../types';

export type PostsState = {
  postList: Post[];
  postListLoaded: boolean;
  postListError: boolean;
  currentPost: Post | null;
  currentPostLoaded: boolean;
  currentPostError: boolean;
};

const initialState: PostsState = {
  postList: [],
  postListLoaded: false,
  postListError: false,
  currentPost: null,
  currentPostLoaded: false,
  currentPostError: false,
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
    case 'GET_POST_BY_ID': {
      return {
        ...state,
        currentPost: action.payload,
        currentPostLoaded: true,
        currentPostError: false,
      };
    }
    case 'GET_POST_ERROR': {
      return {
        ...state,
        currentPostError: true,
      };
    }
    case 'RESET_CURRENT_POST': {
      return {
        ...state,
        currentPost: null,
        currentPostError: false,
        currentPostLoaded: false,
      };
    }
    default: {
      return state;
    }
  }
};
