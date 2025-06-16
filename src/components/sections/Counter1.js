import React from "react";
import CounterNumber from "../elements/CounterNumber";

export default function Counter1() {
  return (
    <div className="row counter-row">
      <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="assets/img/icon/11.svg" alt="img" />
            </div>
            <div className="counter-text">
              <h2>
                <span className="count">
                  <CounterNumber count={10} />
              </span>
              k+
              </h2>
              <p>Envíos Completados</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 wow fadeInUp" data-wow-delay=".3s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="assets/img/icon/12.svg" alt="img" />
            </div>
            <div className="counter-text">
              <h2>
                <span className="count">
                  <CounterNumber count={1} />
              </span>
              k+
            </h2>
            <p>Clientes Activos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 wow fadeInUp" data-wow-delay=".4s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="assets/img/icon/13.svg" alt="img" />
            </div>  
            <div className="counter-text">
              <h2>
                <span className="count">
                  <CounterNumber count={5} />
              </span>
              +
            </h2>
            <p>Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 wow fadeInUp" data-wow-delay=".5s">
        <div className="counter-items">
          <div className="content">
            <div className="icon">
              <img src="assets/img/icon/14.svg" alt="img" />
            </div>
            <div className="counter-text">
              <h2>
                <span className="count">
                  <CounterNumber count={1} />
                </span>
              k+
            </h2>
            <p>Premios Recibidos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
