import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as authorActions from '../actionCreators/authorActions';
import * as articleActions from '../actionCreators/articleActions';
import ArticleList from './ArticleList';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.lookupAuthor = this.lookupAuthor.bind(this);
  }

  lookupAuthor(authorId) {
    return this.props.authors[authorId];
  }

  render() { 
    return (
      <ArticleList
        articles={this.props.articles}
        lookupAuthor={this.lookupAuthor}
      />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    articles: state.articles,
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, authorActions, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(App);
