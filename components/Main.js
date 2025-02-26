import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import CubicajeCalculator from './CubicajeCalculator';
import {SocialIcon} from 'react-social-icons';

const Main = (props) => (
    <div id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id="intro" className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Historia</h2>
            <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
            <p>
                Legacy es una empresa de importación que se funda en Venezuela con una visión clara: apostar en nuestro país sin importar las dificultades económicas que enfrentamos. Nuestra historia se teje en el mundo del comercio internacional, donde encontramos nuestro amor por la importación y exportación. Cada entrega que realizamos es un pilar para el crecimiento, no solo de nuestro negocio, sino también de quienes confían en nosotros.
            </p>
            <p>
                Creemos que en medio de las circunstancias desafiantes se encuentran las mejores oportunidades, y estamos aquí para hacer que el comercio global sea accesible y exitoso para todos.
            </p>
            <div className="close" onClick={() => { props.onCloseArticle() }}></div>
        </article>

        <article id="work" className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Servicios</h2>
          <span className="image main"><img src="/static/images/img.jpg" alt="" /></span>
          <p>➤ Servicio de flete internacional por contenedor 40/20 pies.</p>
          <p>➤ Agenciamiento aduanal y nacionalizacion de carga.</p>
          <p>➤ Importacion de China, EEUU, Panama a Venezuela.</p>
          <p>➤ Despacho en todo el territorio nacional.</p>
          <div className="close" onClick={() => { props.onCloseArticle() }}></div>
        </article>

        <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Calculadora</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>Hemos desarrollado una calculadora para permitir a los clientes cotizar sus envíos de manera rápida y sencilla. Esta herramienta les ayudará a obtener estimaciones precisas de costos y tiempos de entrega, facilitando la planificación de sus envíos.</p>
          <CubicajeCalculator />
          <div className="close" onClick={() => { props.onCloseArticle() }}></div>
        </article>

        <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contacto</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Enviar Mensaje" className="special" /></li>
              <li><input type="reset" value="Restablecer" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <SocialIcon url='https://instagram.com/' target="_blank" href='https://www.instagram.com/legacycargove/?hl=es'></SocialIcon>
            </li>
            <li>
            <SocialIcon url='https://x.com/' target="_blank" href='https://www.instagram.com/legacycargove/?hl=es'></SocialIcon>
            </li>
            <li>
            <SocialIcon url='https://facebook.com/' target="_blank" href='https://www.facebook.com/legacycargove/'></SocialIcon>
            </li>
            <li>
            <SocialIcon url='https://tiktok.com/' target="_blank" href='#'></SocialIcon>
            </li>
            <li>
            <SocialIcon url='https://whatsapp.com/' target="_blank" href='https://wa.me/+584142909883'></SocialIcon>
            </li>
            
          </ul>
          <div className="close" onClick={() => { props.onCloseArticle() }}></div>
        </article>

    </div>
);

Main.propTypes = {
    isArticleVisible: PropTypes.bool,
    timeout: PropTypes.bool,
    articleTimeout: PropTypes.bool,
    article: PropTypes.string,
    onCloseArticle: PropTypes.func.isRequired
};

export default Main;