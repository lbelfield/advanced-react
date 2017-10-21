import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

const ArticleList = (props) => {
  return (
    <div>
      {Object.values(props.articles).map((article) =>
        <Article
          key={article.id}
          article={article}
          author={props.authors[article.authorId]}
        />
      )}
    </div>
  );
};

export default ArticleList;

ArticleList.propTypes = {
  articles: PropTypes.articles,
  authors: PropTypes.authors
};
