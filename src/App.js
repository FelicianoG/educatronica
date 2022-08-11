import './App.css';
import icono1 from './icono1.svg'
import icono2 from './icono2.svg'
import icono3 from './icono3.svg'
import cuadros1 from './CuadrosIzq.svg'
import cuadros2 from './CuadrosDer.svg'
import { useNavigate } from 'react-router-dom'

function App() {
const navigate = useNavigate();
  return (
    <div className="app">
      <header className="main-page-header"></header>
      <main className='main-page-container'>
        <h1>EDUCATRÓNICA</h1>
        <div className='cuadros-container'>
        <img id="cuadros-izquierda" src={cuadros1} alt="decoration" />
        <img id="cuadros-derecha" src={cuadros2} alt="decoration" />
        </div>
        <p>Educatronica es un programa de la secretaria de Educacion y 
          Cultura que consiste en una alternativa flexible y de facil acceso para que las escuelas de educacion secundaria puedan implementar la enseñanza de robotica basica mediante la asignatura de tecnologia</p>
        <div className='white-line'></div>
        <div className='blue-line'></div>
      </main>
      <section className='main-page'>
        <p>Su objetivo principal es contribuir para que los jovenes estudiantes desarrollen las competencias y habilidades que se requieren para afrontar los retos de la sociedad actual, a traves de la enseñanza de robotica basica en escuelas publicas de educacion secundaria en el estado de Sonora</p>
        <div className='cuadritos'>
          <div onClick={()=>{navigate('/volumenes/1')}} className='cuadro a'><img src={icono1} alt="React Logo" /><h2>VOLUMEN I</h2></div>
          <div onClick={()=>{navigate('/volumenes/2')}} className='cuadro b'><img src={icono2} alt="React Logo" /><h2>VOLUMEN II</h2></div>
          <div onClick={()=>{navigate('/volumenes/3')}} className='cuadro c'><img src={icono3} alt="React Logo" /><h2>VOLUMEN III</h2></div>
        </div>
        <p>Su objetivo principal es contribuir para que los jovenes estudiantes desarrollen las competencias y habilidades que se requieren para afrontar los retos de la sociedad actual, a traves de la enseñanza de robotica basica en escuelas publicas de educacion secundaria en el estado de Sonora</p>
        <button>Material Docentes</button>
      </section>
      <footer class='main-page-footer'></footer>
    </div>
  );
}

export default App;
