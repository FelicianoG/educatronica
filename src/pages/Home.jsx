import React from 'react'
import '../App.css';
import icono1 from '../images/icono1.svg'
import icono2 from '../images/icono2.svg'
import icono3 from '../images/icono3.svg'
import cuadros1 from '../images/CuadrosIzq.svg'
import cuadros2 from '../images/CuadrosDer.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
const navigate = useNavigate();
useEffect(() => window.scrollTo(0, 0),[])

  return (
    <div className="app">
      {/* <header className="main-page-header"></header> */}
      <main className='main-page-container'>
        <h1>EDUCATRÓNICA</h1>
        <div className='cuadros-container'>
        <img id="cuadros-izquierda" src={cuadros1} alt="decoration" />
        <img id="cuadros-derecha" src={cuadros2} alt="decoration" />
        </div>
        <p>Educatrónica es un programa de la Secretaría de Educación y 
          Cultura que consiste en una alternativa flexible y de fácil acceso para que las escuelas de educación secundaria puedan implementar la enseñanza de robótica básica mediante la asignatura de tecnología</p>
        <div className='white-line'></div>
        <div className='blue-line'></div>
      </main>
      <section className='main-page'>
        <p>Su objetivo principal es contribuir para que los jóvenes estudiantes desarrollen las competencias y habilidades que se requieren para afrontar los retos de la sociedad actual, a través de la enseñanza de robótica básica en escuelas públicas de educación secundaria en el Estado de Sonora</p>
        <div className='cuadritos'>
          <div onClick={()=>{navigate('/volumenes/1')}} className='cuadro a'><img src={icono1} alt="construction icon" /><h2>VOLUMEN I</h2></div>
          <div onClick={()=>{navigate('/volumenes/2')}} className='cuadro b'><img src={icono2} alt="conexion icon" /><h2>VOLUMEN II</h2></div>
          <div onClick={()=>{navigate('/volumenes/3')}} className='cuadro c'><img src={icono3} alt="coding icon" /><h2>VOLUMEN III</h2></div>
        </div>
        {/* <p>Su objetivo principal es contribuir para que los jovenes estudiantes desarrollen las competencias y habilidades que se requieren para afrontar los retos de la sociedad actual, a traves de la enseñanza de robotica basica en escuelas publicas de educacion secundaria en el estado de Sonora</p>
        <button>Material Docentes</button> */}
      </section>
      <footer className='main-page-footer'></footer>
      <svg className='logo-bg-main' fill='rgba(0,0,0,.05)' id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 831.34"><title>Simbolo</title><path d="M834.48,621.44c-11.56-6.9-42.23-24.86-63.65-37.31l-.38-.24-13.71-8L836,530l-81.4-47.12V195.94L419.46,2,86.64,194.61l-.73.4v288.8L5.5,530.37l78.2,45.26L69.32,584l-.18.12-.08,0L3.4,622.54l353,204.25.73.44,63.3-36.65L483,826.79l.38.2h.79L836.6,622.72ZM420.42,787.21,86.54,594.07l14.35-8.38h0L412,765.64V383.46L106.43,206.6l313-181.14L733.11,207l-89.64,51.83L405.08,120.86l-20.25,11.73,143.51,83L439.69,267,296.18,183.9l-20.29,11.7,238.42,138L428.45,383.2V765.85l309.08-178.8v0l2.13-1.22,13.39,7.8ZM733.49,230.46v335L449.58,729.82V394.75Z"/><polygon points="652.03 478.13 651.88 523.62 560.64 576.41 560.64 531.01 581.77 518.76 581.77 540.38 630.87 511.95 630.87 490.35 652.03 478.13"/><polygon points="539.64 433.82 539.64 534.31 510.57 551.13 510.57 450.64 539.64 433.82"/><polygon points="692.22 347.68 692.22 448.17 663.14 464.99 663.14 364.5 692.22 347.68"/></svg>
    </div>
  );
}

export default App;