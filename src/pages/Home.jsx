import React from "react";
import "../App.css";
import iconob1 from "../images/icono1.svg";
import iconob2 from "../images/icono2.svg";
import iconob3 from "../images/icono3.svg";
import logoMain from "../images/logoMain.svg";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function App() {
  const programa = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <main
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
          programa.current.scrollIntoView();
        }}
        className="main-page-container"
      >
        <img className="main-logo" src={logoMain} alt="Logo Educatronica" />
        <div className="cuadros-container"></div>

        {/* <div className="white-line"></div>
        <div className="blue-line"></div> */}
      </main>
      {/* <div
        className="sections"
        style={{
          margin: 0,
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      <section ref={programa} className="programa">
        <p className="main-p">
          Programa de la Secretaría de Educación y Cultura del estado de Sonora
          para la enseñanza de robótica en escuelas de educación secundaria.
        </p>
        <svg
          className="logo-bg-main"
          fill="rgba(0,0,0,.08)"
          id="Capa_1"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 840 831.34"
        >
          <title>Simbolo</title>
          <path d="M834.48,621.44c-11.56-6.9-42.23-24.86-63.65-37.31l-.38-.24-13.71-8L836,530l-81.4-47.12V195.94L419.46,2,86.64,194.61l-.73.4v288.8L5.5,530.37l78.2,45.26L69.32,584l-.18.12-.08,0L3.4,622.54l353,204.25.73.44,63.3-36.65L483,826.79l.38.2h.79L836.6,622.72ZM420.42,787.21,86.54,594.07l14.35-8.38h0L412,765.64V383.46L106.43,206.6l313-181.14L733.11,207l-89.64,51.83L405.08,120.86l-20.25,11.73,143.51,83L439.69,267,296.18,183.9l-20.29,11.7,238.42,138L428.45,383.2V765.85l309.08-178.8v0l2.13-1.22,13.39,7.8ZM733.49,230.46v335L449.58,729.82V394.75Z" />
          <polygon points="652.03 478.13 651.88 523.62 560.64 576.41 560.64 531.01 581.77 518.76 581.77 540.38 630.87 511.95 630.87 490.35 652.03 478.13" />
          <polygon points="539.64 433.82 539.64 534.31 510.57 551.13 510.57 450.64 539.64 433.82" />
          <polygon points="692.22 347.68 692.22 448.17 663.14 464.99 663.14 364.5 692.22 347.68" />
        </svg>
        <a href="/">PDF del programa</a>
      </section>

      <section className="main-page">
        <h1 className="cuadritos-title">VOLÚMENES</h1>
        <div className="cuadritos">
          <div
            onClick={() => {
              navigate("/volumenes/1");
            }}
            className="cuadro a"
          >
            <img src={iconob1} alt="construction icon" />
            <h2>VOLUMEN I</h2>
          </div>
          <div
            onClick={() => {
              navigate("/volumenes/2");
            }}
            className="cuadro b"
          >
            <img src={iconob2} alt="conexion icon" />
            <h2>VOLUMEN II</h2>
          </div>
          <div
            onClick={() => {
              navigate("/volumenes/3");
            }}
            className="cuadro c"
          >
            <img src={iconob3} alt="coding icon" />
            <h2>VOLUMEN III</h2>
          </div>
        </div>
      </section>

      <section className="contacto">
        <h1 className="contact-info">
          ¿Alguna duda? ¡Contáctanos! <br />
          Teléfono: (662)289 7600, ext. 2351 <br />
          Correo: innovacionsec@sonora.edu.mx
        </h1>
      </section>
      {/* </div> */}
      <footer className="main-page-footer">Footer</footer>
    </div>
  );
}

export default App;
