import React, { Component } from 'react'
import './UpdateForm.css'

class UpdateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formValue: null
        }

        this.updateArticleBtn = this.updateArticleBtn.bind(this)
    }

    componentDidMount() {
        const inputs = document.querySelectorAll('input')
        const textarea = document.querySelector('textarea')
        setTimeout(
            () => {
                inputs[0].value = this.props.article.title
                inputs[1].value = this.props.article.author
                textarea.value = this.props.article.content
                inputs[2].value = this.props.article.tags
            },
        2000)
    }

    updateArticleBtn(ev) {
        ev.preventDefault()
        const inputs = document.querySelectorAll('input')

        const Article = {
            title: inputs[0].value,
            author: inputs[1].value,
            content: inputs[2].value,
            tags: inputs[3].value
        }
        const checkbox = document.getElementById('publishedCheck').checked
        Article.published = checkbox
        this.props.performUpdate(Article)
    }

    render() {
        const classes = this.props.showForm ? 'Update-Form' : 'Update-Form disabled'
        return(
            <form className={classes}>
                <div>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title"/>
                </div>
                <div>
                    <label htmlFor="author">Escrito por</label>
                    <input type="text" id="author"/>
                </div>
                <div>
                    <label htmlFor="content">Contenido</label>
                    <textarea type="text" id="content"/>
                </div>
                <div>
                    <label htmlFor="tags">Categorías</label>
                    <input type="text" id="tags"/>
                </div>
                <div>
                    <label htmlFor='publishedCheck'>Publicado </label>
                    <input type='checkbox' id='publishedCheck' />
                </div>
                <button className='Btn-Submit' type='submit' onClick={this.updateArticleBtn}>Actualizar artículo</button>
            </form>
        )
    }
}

export default UpdateForm