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
                alt="Logotipo de Legacy Cargo"
                style={{ marginTop: '15px' }}
                className='image'
            />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Legacy Cargo</h1>
                
                <p>
                    Su socio confiable en soluciones logísticas y de importación,<br />
                    ofreciendo servicios personalizados para satisfacer sus necesidades.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => { props.onOpenArticle('intro') }}>Historia</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('work') }}>Servicios</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('about') }}>Cotizar</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('contact') }}>Contácto</a></li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func.isRequired,
    timeout: PropTypes.bool
};

export default Header;