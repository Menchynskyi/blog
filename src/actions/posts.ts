import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { actionTypes } from './types';
import { RootState } from '../reducers';

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
    dispatch({
      type: actionTypes.FETCH_POSTS,
      payload: data,
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

export const resetCurrentPost = () => dispatch => {
  dispatch({ type: actionTypes.RESET_CURRENT_POST });
};
