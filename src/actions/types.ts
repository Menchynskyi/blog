import { Post } from '../types';

export const FETCH_POSTS = 'FETCH_POSTS';

export type Action = {
  type: typeof FETCH_POSTS;
  payload: Post[];
};

export const actionTypes = { FETCH_POSTS };
