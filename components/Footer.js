import PropTypes from 'prop-types';
import React from 'react';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
       
        <div className="copyright">
            &copy; {new Date().getFullYear()} Legacy Cargo. Todos los derechos reservados.
        </div>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
