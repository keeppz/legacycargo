import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            
            
            <Image
                src="/static/images/logo.png"
                width={100}
                height={100}
                alt="Isotipo de Legacy Cargo"
                style={{justifyContent: 'center', alignItems: 'center'}}
            />
        </div>
        <div className="content">
            <div className="inner">
                <Image
                  src={"/static/images/logotipo.png"}
                  width={170}
                  height={50}
                  alt='Logotipo de Legacy Cargo'
                  />
                
                   <p> Tu socio confiable en soluciones logísticas y de importación,<br />
                    ofreciendo servicios personalizados para satisfacer sus necesidades.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => { props.onOpenArticle('intro') }}>Historia</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('work') }}>Servicios</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('about') }}>Cotizar</a></li>
                <li><a href="#" onClick={() => { props.onOpenArticle('contact') }}>Contacto</a></li>
            </ul>
        </nav>
        <div className='origin'>
        <Image
                src="/static/images/flags.png"
                width={200}
                height={60}
                alt="Envios Desde"
               
            />
        </div>
    </header>
);

Header.propTypes = {
    onOpenArticle: PropTypes.func.isRequired,
    timeout: PropTypes.bool
};

export default Header;