import { Post } from '../types';

const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

const GET_POST_BY_ID = 'GET_POST_BY_ID';
const GET_POST_ERROR = 'GET_POST_ERROR';
const RESET_CURRENT_POST = 'RESET_CURRENT_POST';

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
  | { type: typeof RESET_CURRENT_POST };

export const actionTypes = {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  GET_POST_BY_ID,
  GET_POST_ERROR,
  RESET_CURRENT_POST,
};
