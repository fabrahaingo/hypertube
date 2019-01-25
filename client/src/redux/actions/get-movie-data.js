import movieAPI from 'API/get-movie-data';
import {
  GET_MOVIE_DATA,
  GET_MOVIE_DATA_SUCCESS,
  GET_MOVIE_DATA_ERROR,
} from './action-types';
import { setErrorA } from '.';

export const getMovieStart = () => ({
  type: GET_MOVIE_DATA,
});

export const getMovieSuccess = movie => ({
  type: GET_MOVIE_DATA_SUCCESS,
  movie,
});

export const getMovieError = () => ({
  type: GET_MOVIE_DATA_ERROR,
});

export const getMovieDataA = (idMovie) => {
  return (dispatch) => {
    dispatch(getMovieStart());
    return movieAPI(idMovie)
      .then(
        (response) => {
          dispatch(getMovieSuccess(response.data.movie));
        },
        (error) => {
          dispatch(setErrorA("error"));
          dispatch(getMovieError());
        },
      );
  };
};