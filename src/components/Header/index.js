import React from 'react'
import './Header.css'

function Header(props) {
    const Title = props.title ? <h3>{props.title}</h3> : ''
    return(
        <div className='header'>
            <div className='header-titles'>
                <h2>Billin Articles</h2>
                {Title}
            </div>
            <div className='header-buttons'>
                <span className='button-add fa fa-plus-circle' />
            </div>
        </div>
    )
}

export default Header