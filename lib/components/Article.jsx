import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {

  const { article, lookupAuthor } = props;
  
  const author = lookupAuthor(article.authorId);

  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>
        <a href={author.website}>{author.firstName} {author.lastName}</a>
      </div>
      <div>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  lookupAuthor: PropTypes.func
};

export default Article;
