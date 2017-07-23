import React from 'react'
import './SingleArticle.css'

function SingleArticle(props) {
    return(
        <div className="App">
            <article className="SingleArticle">
                <h1 className="SingleArticle-Name">{props.title}</h1>
                <div className="SingleArticle-Author">
                    <span className="SingleArticle-Author-Detail">Por:</span>
                    <span className="SingleArticle-Author-Name">{props.author}</span>
                </div>
                <div className="SingleArticle-Content">
                    {props.content}
                </div>
                <div className="SingleArticle-Tags">
                    <div className="SingleArticle-Tags-Detail">Este artículo está clasificado en:</div>
                    <div className="SingleArticle-Tags-Tags">{props.tags}</div>
                </div>
            </article>
        </div>
    )
}

export default SingleArticle