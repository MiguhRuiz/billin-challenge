import React from 'react'
import './Footer.css'

function Footer() {
    return(
        <div className='footer'>
            <div className="footer-developer">
                <img src="https://avatars3.githubusercontent.com/u/5301814" alt='Dev Photo'/>
                <div className="footer-developer-texts">
                    <span className="footer-developer-title">Miguh Ruiz</span>
                    <span className="footer-developer-subtitle">Full Stack JavaScript Developer</span>
                </div>
            </div>
            <div className="footer-phrase">
                <span className="footer-phrase-text">made with</span>
                <span className="fa fa-heart"></span>
                <span className="footer-phrase-text">for</span>
            </div>
            <div className="footer-company">
                <img src="https://www.billin.net/wp-content/themes/billin/img/logotipo-billin@2x.png" width="145" alt='Company Logo'/>
            </div>
        </div>
    )
}

export default Footer