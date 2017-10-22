// OUR ROOT REDUCER!!!
// this merges all of our reducers into one place to get any of the props needed.

import { combineReducers } from 'redux';
import authors from './authorReducer';
import articles from './articleReducer';

const rootReducer = combineReducers({
  authors: authors,
  articles: articles
});

export default rootReducer;