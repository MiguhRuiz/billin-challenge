import React, { Component } from 'react'
import './NewForm.css'

class NewForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formValue: null
        }
        this.onChange = this.onChange.bind(this)
        this.addArticleBtn = this.addArticleBtn.bind(this)
    }

    onChange(ev) {
        ev.preventDefault()

        const inputs = document.querySelectorAll('input')
        const newArticle = {
            "title": inputs[0].value,
            "author": inputs[1].value,
            "content": inputs[2].value,
            "tags": inputs[3].value
        }

        this.setState({ formValue: newArticle })
    }

    addArticleBtn(ev) {
        ev.preventDefault()
        const Article = this.state.formValue
        this.props.addArticle(Article)
    }

    render() {
        return(
            <form onChange={this.onChange} className='Add-Form disabled'>
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
                    <input type="text" id="content"/>
                </div>
                <div>
                    <label htmlFor="tags">Categorías</label>
                    <input type="text" id="tags"/>
                </div>
                <button className='Btn-Submit' type='submit' onClick={this.addArticleBtn}>Añadir artículo</button>
            </form>
        )
    }
}

export default NewForm