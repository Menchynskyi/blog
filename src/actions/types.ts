import { Post } from '../types';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export type Action =
  | {
      type: typeof FETCH_POSTS;
      payload: Post[];
    }
  | {
      type: typeof FETCH_POSTS_ERROR;
    };

export const actionTypes = { FETCH_POSTS, FETCH_POSTS_ERROR };
