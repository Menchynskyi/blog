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
  const { data } = await axios(apiUrl);
  dispatch({
    type: actionTypes.FETCH_POSTS,
    payload: data,
  });
};
