import React from 'react';
import PropTypes from 'prop-types';
import CubicajeCalculator from './CubicajeCalculator';
import {SocialIcon} from 'react-social-icons';

const Main = (props) => (
    <div id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id="intro" className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Historia</h2>
            <span className="image main"><img src="/static/images/historia.jpg" alt="" /></span>
            <p> Legacy es una empresa de importación que se funda en Venezuela con una visión clara: apostar en nuestro país. Nuestra historia se teje en el mundo del comercio internacional, donde encontramos nuestro amor por la importación y exportación. Cada entrega que realizamos es un pilar para el crecimiento, no solo de nuestro negocio, sino también de quienes confían en nosotros.</p>
            
            <p>Creemos que en medio de las circunstancias desafiantes se encuentran las mejores oportunidades, y estamos aquí para hacer que el comercio global sea accesible y exitoso para todos.</p>
            <div className="close" onClick={() => { props.onCloseArticle() }}></div>
        </article>

        <article id="work" className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Servicios</h2>
          <span className="image main"><img src="/static/images/servicios.jpg" alt="" /></span>
          <h3>Soluciones completas para sus necesidades de importación y exportación</h3>
          <ul className='servicios'>➤ Transporte Aéreo
            <li>Servicio express de carga aérea desde Miami y Panamá hacia Venezuela. </li>
            <li>Tiempos de tránsito reducidos.</li>
            <li>Seguimiento en tiempo real de su carga.</li>
          </ul>
          <ul className='servicios'>➤ Transporte Marítimo
            <li>Consolidación de carga marítima desde Miami, China y Panamá.</li>
            <li>Contenedores completos (FCL).</li>
            <li>Carga suelta (LCL).</li>
            <li>Seguimiento en tiempo real de su carga.</li>
          </ul>
          <ul className='servicios'>➤ Servicios Aduanales
            <li>Gestión integral de trámites aduaneros en Venezuela.</li>
            <li>Tiempos de tránsito reducidos.</li>
          </ul>
          <ul className='servicios'>➤ Valor Agregado
            <li>Seguro de carga internacional</li>
            <li> Embalaje especializado</li>
            <li>Tracking en tiempo real</li>
            <li>Asesoría en comercio exterior</li>            
            <li>Atencíon personalizada</li>            
          </ul>       
          <ul className='servicios'>➤ Despacho en todo el territorio nacional.</ul>
          <div className="close" onClick={() => { props.onCloseArticle() }}></div>
        </article>

        <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Calculadora</h2>
          <span className="image main"><img src="/static/images/calculadora.jpg" alt="" /></span>
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