import {
  SET_LOCALE,
  TOGGLE_DARK_THEME,
  CHECK_USER_IN_COOKIE,
  DELETE_USER_FROM_COOKIE,
  CLEAR_REGISTER_DATA,
  SET_ERROR,
  CLEAR_ERROR,
} from './action-types';
import { loginUser } from './login-user';
import { logoutUser } from './logout-user';
import { registerUser } from './register-user';
import { registerUserOauth } from './register-user-oauth';
import { getUserInfoPrivate } from './get-user-info-private';


export const checkUserInCookie = cookie => ({
  type: CHECK_USER_IN_COOKIE,
  cookie,
});

export const deleteUserFromCookie = () => ({
  type: DELETE_USER_FROM_COOKIE,
});

export const toggleDarkTheme = () => ({
  type: TOGGLE_DARK_THEME,
});

export const setLocale = locale => ({
  type: SET_LOCALE,
  locale,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setError = error => ({
  type: SET_ERROR,
  error,
});

export const clearRegisterData = () => ({
  type: CLEAR_REGISTER_DATA,
});

export {
  loginUser,
  logoutUser,
  registerUser,
  registerUserOauth,
  getUserInfoPrivate,
};
