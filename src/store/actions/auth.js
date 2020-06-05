import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START } from "./types";
import axios from "axios";

export const start = (dispatch) =>
  dispatch({
    type: AUTH_START,
  });

export const success = (dispatch, { idToken, localId }) =>
  dispatch({
    type: AUTH_SUCCESS,
    id: localId,
    token: idToken,
  });

export const fail = (dispatch, error) =>
  dispatch({
    type: AUTH_FAIL,
    error,
  });

const key = "AIzaSyD5A0H4LiuIkOVzsXG8gPdYSuXB73SWkJY";
const signInUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;
const signUpUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
  key;
export const auth = (dispatch, method, email, password) =>
  axios
    .post(method === "signin" ? signInUrl : signUpUrl, { email, password })
    .then(({ data }) => success(dispatch, data))
    .catch((error) => fail(dispatch, error));
