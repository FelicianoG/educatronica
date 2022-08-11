import React from 'react'
import './volumen.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Volumen({inicial}) {
    const navigate = useNavigate();
    const params = useParams();
    if(params.id < 1 || params.id > 3){params.id = 1;}
    useEffect(() => window.scrollTo(0, 0),[])

    const volumenes = [{color:'green', nextColor:'hoverorange',prevColor:'hoverblue', titulo:'VOLUMEN I', anterior:'VOLUMEN III', siguiente:'VOLUMEN II' ,grado:'1o'},
    {color:'orange', nextColor:'hoverblue',prevColor:'hovergreen', titulo:'VOLUMEN II', anterior:'VOLUMEN I', siguiente:'VOLUMEN III' ,grado:'2o'},
    {color:'blue', nextColor:'hovergreen',prevColor:'hoverorange', titulo:'VOLUMEN III', anterior:'VOLUMEN II', siguiente:'VOLUMEN I' ,grado:'3o'}]

    const [volumen, setVolumen] = useState(volumenes[(params.id)-1])
    const [id, setId] = useState(parseFloat(params.id) )

    function handleNavigate(id, direction){
        id = parseFloat(id)
        let nextId;
        if(direction === 'forward'){ nextId = id + 1 }
        else if(direction === 'back'){ nextId = id - 1 }
        if(nextId < 1){ nextId = 3 }
        else if(nextId > 3){ nextId = 1 }
        navigate(`/volumenes/${ nextId }`)
        setId(nextId)
        setVolumen(volumenes[ nextId-1 ])
    }

    return (
    <div>
        <header className="main-page-header"></header>
        <main id='volume-container' className={volumen.color}>
            <h3>{volumen.grado} Grado - Educación Secundaria</h3>
            <div className='title-container'>
                <div className='alt-nav'>
                    <div className={`alt-nav-sides ${volumenes[id-1].prevColor}`} onClick={()=>{handleNavigate( id, 'back' )}} >{'<'}</div>
                    <div className={`alt-nav-sides ${volumenes[id-1].nextColor}`} onClick={()=>{handleNavigate( id, 'forward' )}}>{'>'}</div>
                </div>
                <h1 className={`side-nav ${volumenes[id-1].prevColor}`} onClick={()=>{handleNavigate( id, 'back' )}}>{volumen.anterior}</h1>
                <h1>{ volumen.titulo }</h1>
                <h1 className={`side-nav ${volumenes[id-1].nextColor}`} onClick={()=>{handleNavigate( id, 'forward')}}>{volumen.siguiente}</h1>
            </div>
            <h4>A continuación, ponemos a tu disposición el siguiente material con el que podrás impartir tus clases</h4>
            <section className='cuadros-stack'>
                <div className='cuadro-row'>
                    <div className='cuadro-item'>
                        <p>Kit de Educatrónica</p>
                    </div>
                    <div className='cuadro-item'>
                        <p>Instalación y configuración</p>
                    </div>
                </div>
                <div className='cuadro-row'>
                    <div className='cuadro-item'>
                        <p>Libro de Trabajo</p>
                    </div>
                    <div className='cuadro-item'>
                        <p>Evacuación diagnóstica</p>
                    </div>
                </div>
            </section>
            <footer className='volume-footer'>
                <h2>Presentaciones de clase</h2>
                <h4>A continuación puedes acceder a las presentaciones de clase, <br/>hoja de medidas y videos de las sesiones del programa.</h4>
                <button>MÓDULOS</button>
                <br/>
                <button onClick={() => navigate('/')}>Volver al inicio</button>
            </footer>
        </main>
    </div>
  )
}
