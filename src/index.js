import React from 'react';
import ReactDOM from 'react-dom/client';
// import "../node_modules/react-modal-video/css/modal-video.css"
import "./css/bootstrap.min.css";
import "./css/all.min.css";
import "./css/animate.css";
import "./css/magnific-popup.css";
import "./css/meanmenu.css";
import "./css/swiper-bundle.min.css";
import "./css/nice-select.css";
import "./css/color.css";
import "./css/main.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
