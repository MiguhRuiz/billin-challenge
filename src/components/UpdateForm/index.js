import React, { Component } from 'react'
import { Fieldset, Field, createValue } from 'react-forms'
import './UpdateForm.css'

class UpdateForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formValue: createValue({
                value: props.value,
                onChange: this.onChange.bind(this)
            })
        }

        this.updateArticleBtn = this.updateArticleBtn.bind(this)
    }

    componentDidMount() {
        const inputs = document.querySelectorAll('.Update-Form div div input')
        setTimeout(
            () => {
                inputs[0].value = this.props.article.title
                inputs[1].value = this.props.article.author
                inputs[2].value = this.props.article.content
                inputs[3].value = this.props.article.tags
            },
        2000)
    }

    onChange(formValue) {
        this.setState({formValue})
    }

    updateArticleBtn(ev) {
        ev.preventDefault()
        const inputs = document.querySelectorAll('.Update-Form div div input')

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
            <Fieldset formValue={this.state.formValue} className={classes}>
                <Field select='title' label='Título' />
                <Field select='author' label='Escrito por' />
                <Field select='content' label='Contenido' />
                <Field select='tags' label='Categorías' />
                <div>
                    <label htmlFor='publishedCheck'>Publicado </label>
                    <input type='checkbox' id='publishedCheck' />
                </div>
                <button className='Btn-Submit' type='submit' onClick={this.updateArticleBtn}>Actualizar artículo</button>
            </Fieldset>
        )
    }
}

export default UpdateForm