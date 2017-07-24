import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticle, getArticleSuccess, getArticleFailure, deleteArticle } from '../actions'

import Header from '../components/Header'
import Footer from '../components/Footer'
import SingleArticle from '../components/SingleArticle'

const mapStateToProps = (state) => {
    return {
        article: state.articles.currentArticle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticle: (id) => {
            dispatch(getArticle(id))
        },
        deleteArticle: (id) => {
            dispatch(deleteArticle(id))
        }
    }
}

class ArticleView extends React.Component {
    constructor(props) {
        super(props)

        this.deleteArticle = this.deleteArticle.bind(this)
    }

    componentDidMount() {
        this.props.getArticle(this.props.match.params.id)
    }

    deleteArticle(ev) {
        ev.preventDefault()
        this.props.deleteArticle(this.props.match.params.id)
        this.props.history.push('/')
    }

    render() {
        return(
            <div className="App">
                <Header/>
                <SingleArticle 
                    {...this.props.article.article[0]}
                    deleteArticle={this.deleteArticle}
                />
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView)