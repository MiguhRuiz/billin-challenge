import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticle, getArticleSuccess, getArticleFailure } from '../actions'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Article from '../components/Article'

const mapStateToProps = (state) => {
    return {
        article: state.articles.currentArticle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticle: (id) => {
            dispatch(getArticle(id))
        }
    }
}

class ArticleView extends React.Component {
    componentDidMount() {
        this.props.getArticle(this.props.match.params.id)
    }
    render() {
        return(
            <div className="App">
                <Header />
                <Article {...this.props.article.article[0]}/>
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView)