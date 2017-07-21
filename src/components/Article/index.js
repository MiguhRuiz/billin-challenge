import React, { Component } from 'react'
import './Article.css'

class Article extends Component {
    render() {
        return(
            <div className="Article">
                <div className="Article-title">
                    <h3 className="Article-title-text">{this.props.title}</h3>
                    <span className="Article-title-icon fa fa-angle-right"></span>
                </div>
                <div className="Article-author">
                    <span className="Article-author-description">Escrito por:</span>
                    <span className="Article-author-name">{this.props.author}</span>
                </div>
                <h4 className="Article-excerpt">{this.props.excerpt}</h4>
            </div>
        )
    }
}

export default Article