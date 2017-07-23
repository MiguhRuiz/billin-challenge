import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header(props) {
    const Title = props.title ? <h3>{props.title}</h3> : ''
    return(
        <div className='header'>
            <div className='header-titles'>
                <Link to='/'>
                    <h2>Billin Articles</h2>
                </Link>
                {Title}
            </div>
            <div className='header-buttons'>
                <span className='button-add fa fa-plus-circle' />
            </div>
        </div>
    )
}

export default Header