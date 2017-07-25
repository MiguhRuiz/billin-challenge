import React from 'react'
import './NewBtn.css'

function NewBtn(props) {
    return(
        <div className='new-btn'>
           <span className='button-add fa fa-plus-circle' onClick={props.toggle}/>
        </div>
    )
}

export default NewBtn