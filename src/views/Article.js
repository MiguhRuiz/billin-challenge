import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticle, getArticleSuccess, getArticleFailure, deleteArticle, updateArticle } from '../actions'

import Header from '../components/Header'
import Footer from '../components/Footer'
import SingleArticle from '../components/SingleArticle'
import UpdateForm from '../components/UpdateForm'

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
        },
        updateArticle: (id, article) => {
            dispatch(updateArticle(id, article))
        }
    }
}

class ArticleView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false
        }

        this.deleteArticle = this.deleteArticle.bind(this)
        this.updateArticle = this.updateArticle.bind(this)
        this.performUpdate = this.performUpdate.bind(this)
    }

    componentDidMount() {
        this.props.getArticle(this.props.match.params.id)
    }

    deleteArticle(ev) {
        ev.preventDefault()
        this.props.deleteArticle(this.props.match.params.id)
        this.props.history.push('/')
    }

    updateArticle(ev) {
        ev.preventDefault()
        this.setState({ showForm: true })
    }

    performUpdate(article) {
        this.props.updateArticle(this.props.match.params.id, article)
        window.location.reload(false)
    }

    render() {
        return(
            <div className="App">
                <Header/>
                <UpdateForm
                    showForm={this.state.showForm}
                    article={this.props.article.article[0]}
                    performUpdate={this.performUpdate}
                />
                <SingleArticle 
                    {...this.props.article.article[0]}
                    deleteArticle={this.deleteArticle}
                    updateArticle={this.updateArticle}
                />
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView)