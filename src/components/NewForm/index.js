import React, { Component } from 'react'
import { Fieldset, Field, createValue } from 'react-forms'
import './NewForm.css'

class NewForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formValue: createValue({
                value: props.value,
                onChange: this.onChange.bind(this)
            })
        }

        this.addArticleBtn = this.addArticleBtn.bind(this)
    }

    onChange(formValue) {
        this.setState({formValue})
    }

    addArticleBtn(ev) {
        ev.preventDefault()
        const Article = this.state.formValue.value
        this.props.addArticle(Article)
    }

    render() {
        return(
            <Fieldset formValue={this.state.formValue} className='Add-Form disabled'>
                <Field select='title' label='Título' />
                <Field select='author' label='Escrito por' />
                <Field select='content' label='Contenido' />
                <Field select='tags' label='Categorías' />
                <button className='Btn-Submit' type='submit' onClick={this.addArticleBtn}>Añadir artículo</button>
            </Fieldset>
        )
    }
}

export default NewForm