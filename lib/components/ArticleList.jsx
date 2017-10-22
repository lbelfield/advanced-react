import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

const ArticleList = ({articles, lookupAuthor}) => {
  return (
    <div>
      {Object.values(articles).map((article) =>
        <Article
          key={article.id}
          article={article}
          lookupAuthor={lookupAuthor}
        />
      )}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  lookupAuthor: PropTypes.func.isRequired
};

export default ArticleList;
