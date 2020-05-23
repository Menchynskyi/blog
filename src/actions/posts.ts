import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { actionTypes } from './types';
import { RootState } from '../reducers';
import { Post } from '../types';

export type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;

export type AppThunkAction = ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
>;

const apiUrl = 'https://simple-blog-api.crew.red/posts';

export const fetchPosts = (): AppThunkAction => async (
  dispatch: AppThunkDispatch
): Promise<void> => {
  try {
    const { data } = await axios(apiUrl);
    const postList: Post[] = [...data]
      .reverse()
      .filter(({ title }) => title.trim());

    dispatch({
      type: actionTypes.FETCH_POSTS,
      payload: postList,
    });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_POSTS_ERROR });
    throw new Error(error);
  }
};

export const getPostById = (postId: string): AppThunkAction => async (
  dispatch: AppThunkDispatch
): Promise<void> => {
  try {
    const { data } = await axios(`${apiUrl}/${postId}?_embed=comments`);
    dispatch({
      type: actionTypes.GET_POST_BY_ID,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_POSTS_ERROR });
    throw new Error(error);
  }
};

export const resetCurrentPost = () => (dispatch: AppThunkDispatch) => {
  dispatch({ type: actionTypes.RESET_CURRENT_POST });
};

export const createNewPost = (
  values: Omit<Post, 'id'>
): AppThunkAction => async (dispatch: AppThunkDispatch) => {
  try {
    await axios.post(`${apiUrl}`, values);
    dispatch({
      type: actionTypes.CREATE_POST_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: actionTypes.CREATE_POST_ERROR });
    throw new Error(error);
  }
};

export const resetCreatedPost = () => (dispatch: AppThunkDispatch) => {
  dispatch({ type: actionTypes.RESET_CREATED_POST });
};
