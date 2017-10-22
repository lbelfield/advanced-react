import * as types from './actionTypes';
import DataApi from '../DataApi';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function getAuthors() {
  
  return function(dispatch) {

    return DataApi.getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw(error);
      });
  };
}
