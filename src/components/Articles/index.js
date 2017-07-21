import React from 'react'
import Article from '../Article'
import './Articles.css'

function Articles(props) {
    if(!props.articles) {
        return(
            <h3>Cargando los mejores artículos para ti...</h3>
        )
    } else {
        return(
            <div className="Articles">
                {
                    props.articles.map(article => (
                        <Article {...article} />
                    ))
                }
            </div>
        )
    }
}

export default Articles