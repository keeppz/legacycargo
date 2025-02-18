import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


const Main = (props) => (
    <div id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id="intro" className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Historia</h2>
            <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
            <p>Legacy Cargo es una empresa de envíos que nació en 2021 con la misión de transformar la forma en que las personas y las empresas envían y reciben paquetes. Fundada por dos jovenes de emprendedores apasionados por la logística y el comercio, Legacy Cargo se estableció en un momento en que el comercio electrónico estaba en auge y la demanda de soluciones de envío rápidas y confiables nunca había sido tan alta.</p>
            <p>Desde sus inicios, Legacy Cargo se ha enfocado en ofrecer un servicio al cliente excepcional y soluciones logísticas innovadoras. Con una visión clara de ser un referente en la industria de envíos. A medida que avanza hacia el futuro, Legacy Cargo se mantiene firme en su compromiso de ser un líder en la industria de envíos, construyendo un legado de confianza, eficiencia y sostenibilidad.</p>
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
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          <div className="close" onClick={() => { props.onCloseArticle() }}></div>
        </article>

        <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" onClick={() => { /* Manejar click */ }}>
              <FontAwesomeIcon icon={faXTwitter} />
            </a></li>
            <li><a href="#" onClick={() => { /* Manejar click */ }}>
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#" onClick={() => { /* Manejar click */ }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#" onClick={() => { /* Manejar click */ }}>
              <FontAwesomeIcon icon={faTiktok} />
            </a></li>
            <li><a href="#" onClick={() => { /* Manejar click */ }}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a></li>
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