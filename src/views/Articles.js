import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getArticles, getArticlesSuccess, getArticlesFailure } from '../actions'
import './Articles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Articles from '../components/Articles'

const mapStateToProps = (state) => {
  return {
    articlesList: state.articles.articlesList.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => {
      dispatch(getArticles())
    }
  }
}

class ArticlesView extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    this.props.getArticles()
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <Articles articles={this.props.articlesList}/>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
