import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getArticles, getArticlesSuccess, getArticlesFailure,
          addArticle, addArticleSuccess, addArticleFailure } from '../actions'
import './Articles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Articles from '../components/Articles'
import BtnNew from '../components/NewBtn'
import NewForm from '../components/NewForm'

const mapStateToProps = (state) => {
  return {
    articlesList: state.articles.articlesList.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => {
      dispatch(getArticles())
    },
    addArticle: (article) => {
      dispatch(addArticle(article))
    }
  }
}

class ArticlesView extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
    };

    this.toggleForm = this.toggleForm.bind(this)
    this.addArticle = this.addArticle.bind(this)
  }

  // lifecycle
  componentWillMount() {
    this.props.getArticles()
  }

  toggleForm() {
    const element = document.getElementsByClassName('Add-Form')[0]
    const classes = Array.from(element.className.split(' '))
    
    if(classes.includes('disabled')) {
      element.className = 'Add-Form'
    } else {
      element.className = `${element.className} disabled`
    }
  }

  addArticle(article) {
    this.props.addArticle(article)
    const newArticles = this.props.articlesList.push(article)

    const element = document.getElementsByClassName('Add-Form')[0]
    element.className = `${element.className} disabled`
  }
 
  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <NewForm addArticle={this.addArticle}/>
        <Articles articles={this.state.articles || this.props.articlesList}/>
        <BtnNew toggle={this.toggleForm}/>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesView);
