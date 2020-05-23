import { Post } from '../types';

const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

const GET_POST_BY_ID = 'GET_POST_BY_ID';
const GET_POST_ERROR = 'GET_POST_ERROR';
const RESET_CURRENT_POST = 'RESET_CURRENT_POST';

const CREATE_POST = 'CREATE_POST';
const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
const CREATE_POST_ERROR = 'CREATE_POST_ERROR';
const RESET_CREATED_POST = 'RESET_CREATED_POST';

export type Action =
  | {
      type: typeof FETCH_POSTS;
      payload: Post[];
    }
  | {
      type: typeof FETCH_POSTS_ERROR;
    }
  | { type: typeof GET_POST_BY_ID; payload: Post }
  | { type: typeof GET_POST_ERROR }
  | { type: typeof RESET_CURRENT_POST }
  | { type: typeof CREATE_POST }
  | {
      type: typeof CREATE_POST_SUCCESS;
    }
  | {
      type: typeof CREATE_POST_ERROR;
    }
  | { type: typeof RESET_CREATED_POST };

export const actionTypes = {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  GET_POST_BY_ID,
  GET_POST_ERROR,
  RESET_CURRENT_POST,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  RESET_CREATED_POST,
};
