import updateUserImageAPI from 'API/update-user-image';
import {
  UPDATE_USER_IMAGE,
  UPDATE_USER_IMAGE_SUCCESS,
  UPDATE_USER_IMAGE_ERROR,
} from './action-types';
import { setErrorA, changeUserValueA, deleteUserFromUserListA, getUserInfoA } from '.';

export const updateUserImageStart = () => ({
  type: UPDATE_USER_IMAGE,
});

export const updateUserImageSuccess = result => ({
  type: UPDATE_USER_IMAGE_SUCCESS,
  result,
});

export const updateUserImageError = () => ({
  type: UPDATE_USER_IMAGE_ERROR,
});

export const updateUserImageA = (token, form) => {
  return (dispatch) => {
    dispatch(updateUserImageStart());
    return updateUserImageAPI(token, form)
      .then(
        (result) => {
          console.log(result);
          dispatch(changeUserValueA('picture', result.data.picture));
          dispatch(deleteUserFromUserListA(result.data.user));
          getUserInfoA(token, result.data.user, dispatch);
          dispatch(updateUserImageSuccess(result));
        },
        (error) => {
          dispatch(setErrorA(error.message));
          dispatch(updateUserImageError());
        },
      );
  };
};
