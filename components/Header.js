import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            {<span className="icon fa-diamond"></span>}
            
            <Image
                src="/static/images/logo.png"
                width={40}
                height={50}
                alt="logotipo"
                style={{ marginTop: '15px' }}
            />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Legacy Cargo</h1>
                <p>Un sitio web totalmente responsivo diseñado para Legacy Cargo &copy <br />
                 <a href="https://html5up.net/license">Creative Commons</a>.</p>
                <p>Proporcionamos soluciones logísticas eficientes y confiables para su negocio.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func.isRequired,
    timeout: PropTypes.bool
};

export default Header;
