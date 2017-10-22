import * as types from './actionTypes';
import DataApi from '../DataApi';

export function loadArticlesSuccess(articles) {
  return { type: types.LOAD_ARTICLES_SUCCESS, articles: articles };
}

export function getArticles() {

  return function(dispatch) {
    
    return DataApi.getArticles()
      .then((articles) => {
        dispatch(loadArticlesSuccess(articles));
      })
      .catch((error) => {
        throw(error);
      });
  };
}
