import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { article, author } = props;

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

export default Article;

Article.propTypes = {
  article: PropTypes.article,
  author: PropTypes.author
};