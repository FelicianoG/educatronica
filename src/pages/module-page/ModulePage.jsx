import React from 'react'
import './modulePage.css'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import contextStore from '../../context/store'
import Modal from '../../components/Modal'
import Module from './components/Module'

const moduleVolumeOne = [
    {
        title:'Modulo 1',
        subtitle:'Conociendo las disciplinas que forman parte de la robótica',
        meses: [
            {
                mes:'Septiembre',
                objetos:[
                    {
                        texto:'Introducción general',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Introducción a la electricidad',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Introducción a la electrónica',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Introducción a la programación',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            },
            {
                mes:'Octubre',
                objetos:[
                    {
                        texto:'Componentes electrónicos 1',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Componentes electrónicos 2',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Plataforma Scratch para Arduino 1',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Plataforma Scratch para Arduino 2',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            },
            {
                mes:'Noviembre',
                objetos:[
                    {
                        texto:'Práctica 1 - LED',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 2 - LED',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 3 - LED',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 4 - LED',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            }
        ], 
    },
    {
        title:'Modulo 2',
        subtitle:'Descubrir y explorar más sobre Educatrónica',
        meses: [
            {
                mes:'Diciembre',
                objetos:[
                    {
                        texto:'Práctica 5 - LED',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 1 - Semáforo',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 6 - Zumbador',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 2 - Carro policía',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            },
            {
                mes:'Enero',
                objetos:[
                    {
                        texto:'Práctica 7 - Motor',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 3 - Helicóptero',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 8 - Servomotor',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 4 - Futbol',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            },
            {
                mes:'Febrero',
                objetos:[
                    {
                        texto:'Práctica 9 - Sensor de luz',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 5 - Alumbrado público',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 10 - Sensor de distancia',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 6 - Pluma de estacionamiento',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            }
        ], 
    },
    {
        title:'Modulo 3',
        subtitle:'Armando ideas',
        meses: [
            {
                mes:'Marzo',
                objetos:[
                    {
                        texto:'Práctica 11 – Sensor de lluvia',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 7 – puerta de mascota',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 12 – Sensor de temperatura',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 8 – Congelador',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            },
            {
                mes:'Abril',
                objetos:[
                    {
                        texto:'Competencia',
                        recursos:[{tipo:'Presentación',url:''}]
                    }
                ]
            }
        ], 
    }
]

const moduleVolumeTwo = [
    {
        title:'Modulo 1',
        subtitle:'Conociendo la relación de las disciplinas que forman parte de la robótica',
        meses: [
            {
                mes:'Septiembre',
                objetos:[
                    {
                        texto:'Introducción general 1',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Introducción general 2',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Elementos de la robótica',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Componentes electrónicos 1',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            },
            {
                mes:'Octubre',
                objetos:[
                    {
                        texto:'Componentes electrónicos 2',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Plataforma Scratch para Arduino 1',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Plataforma Scratch para Arduino 2',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 1 - LED',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            },
            {
                mes:'Noviembre',
                objetos:[
                    {
                        texto:'Práctica 2 - Bocina',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 1 - Camión escolar',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 3 - RGB',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 2 - Plano',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            }
        ], 
    },
    {
        title:'Modulo 2',
        subtitle:'Descubrir y explorar más sobre Educatrónica',
        meses: [
            {
                mes:'Diciembre',
                objetos:[
                    {
                        texto:'Práctica 4 - Sensor touch',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 5 - Servomotor',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 3 - Aire acondicionado',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 6 - Potenciómetro',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            },
            {
                mes:'Enero',
                objetos:[
                    {
                        texto:'Práctica 7 - Servomotor',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 4 - Robot',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 8 - Joystick',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 5 - Beisbol',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            },
            {
                mes:'Febrero',
                objetos:[
                    {
                        texto:'Práctica 9 - Sensor infrarrojo',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 6 - Puerta de acceso',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 10 - Sensor de presencia',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 11 - Display de 7 segmentos',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            }
        ], 
    },
    {
        title:'Modulo 3',
        subtitle:'Armando ideas',
        meses: [
            {
                mes:'Marzo',
                objetos:[
                    {
                        texto:'Práctica 11 - Sensor de lluvia',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Proyecto 7 - puerta de mascota',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 12 - Sensor de temperatura',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto 8 - Congelador',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            },
            {
                mes:'Abril',
                objetos:[
                    {
                        texto:'Competencia',
                        recursos:[{tipo:'Presentación',url:''}]
                    }
                ]
            }
        ], 
    }
]

const moduleVolumeThree = [
    {
        title:'Modulo 1',
        subtitle:'Conociendo la relación de las disciplinas que forman parte de la robótica',
        meses: [
            {
                mes:'Septiembre',
                objetos:[
                    {
                        texto:'Introducción general',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Electricidad',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Electrónica',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Introducción a la programación escrita 1',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            },
            {
                mes:'Octubre',
                objetos:[
                    {
                        texto:'Introducción a la programación escrita 2',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Introducción a las variables y tipos de datos',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Introducción a los operadores',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Introducción a las estructuras de control',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            },
            {
                mes:'Noviembre',
                objetos:[
                    {
                        texto:'Introducción a las funciones',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Introducción a las librearías',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Tendencias de la robótica',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Componentes electrónicos 1',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            }
        ], 
    },
    {
        title:'Modulo 2',
        subtitle:'Descubrir y explorar más sobre Educatrónica',
        meses: [
            {
                mes:'Diciembre',
                objetos:[
                    {
                        texto:'Componentes electrónicos 2',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Plataforma Arduino IDE',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 1 – LED',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 2 – LED',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            },
            {
                mes:'Enero',
                objetos:[
                    {
                        texto:'Práctica 3 – LED',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 4 – LED',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 5 – LED',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 6 – Zumbador',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            },
            {
                mes:'Febrero',
                objetos:[
                    {
                        texto:'Práctica 7 – Servomotor',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 8 – Servomotor',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 9 – Motor',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 10 – Sensor de luz',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            }
        ], 
    },
    {
        title:'Modulo 3',
        subtitle:'Armando ideas',
        meses: [
            {
                mes:'Marzo',
                objetos:[
                    {
                        texto:'Práctica 11 – Sensor de distancia',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                    {
                        texto:'Práctica 12 – Sensor de lluvia',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 13 – Potenciómetro',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 14 – Servomotor',
                        recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                    },
                ]
            },
            {
                mes:'Abril',
                objetos:[
                    {
                        texto:'Práctica 15 – Sensor de presencia',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 16 – Motorreductor',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Práctica 17 – Motorreductor',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                    {
                        texto:'Proyecto carro seguidor de línea',
                        recursos:[{tipo:'Presentación',url:''}]
                    },
                ]
            },
            {
                mes:'Mayo',
                objetos:[
                    {
                        texto:'Competencia',
                        recursos:[{tipo:'Presentación',url:''}]
                    }
                ]
            }
        ], 
    }
]


export default function Modulo({inicial}) {
    const navigate = useNavigate();
    const params = useParams();
    const context = useContext(contextStore);

    if((!params.id || params.id < 1) || params.id > 3){params.id = 1;}
    
    useEffect(() => window.scrollTo(0, 0),[])

    const [portal, setPortal] = useState(false);
    function handleClosePortal(){setPortal(false)}

    const [ selectedSection, setSelectedSection ] = useState('');

    const volumenes = [
        {modulo:moduleVolumeOne,kit:{
            titulo:'Kit de educatronica',
            mensaje:'Haz click aqui para descargar el kit de educatronica',
            link: context.semaforoPDFURL

        }, bgcolor: 'rgba(158,227,29,.3)', color:'green', nextColor:'hoverorange',prevColor:'hoverblue', titulo:'VOLUMEN I', anterior:'VOLUMEN III', siguiente:'VOLUMEN II' ,grado:'1o'},
        {modulo:moduleVolumeTwo,bgcolor:'rgba(245,135,10,.2)',color:'orange', nextColor:'hoverblue',prevColor:'hovergreen', titulo:'VOLUMEN II', anterior:'VOLUMEN I', siguiente:'VOLUMEN III' ,grado:'2o'},
        {modulo:moduleVolumeThree,bgcolor:'rgba(0,188,205,.2)',color:'blue', nextColor:'hovergreen',prevColor:'hoverorange', titulo:'VOLUMEN III', anterior:'VOLUMEN II', siguiente:'VOLUMEN I' ,grado:'3o'}
]
    const [volumen, setVolumen] = useState(volumenes[(params.id)-1])
    const [id, setId] = useState(parseFloat(params.id))

    function handleNavigate(id, direction){
        id = parseFloat(id)
        let nextId;
        if(direction === 'forward'){ nextId = id + 1 }
        else if(direction === 'back'){ nextId = id - 1 }
        if(nextId < 1){ nextId = 3 }
        else if(nextId > 3){ nextId = 1 }
        navigate(`/modulos/${ nextId }`)
        setId(nextId)
        setVolumen(volumenes[ nextId-1 ])
    }
    function handlePortal(target){
        setSelectedSection(target)
        setPortal(true)
    }

    return (
    <div className='App'>
        <header className="main-page-header"></header>
        <main id='module-container' className={volumen.color}>
            <div className='module-title-container'>
                <div className='module-alt-nav'>
                    <div className={`module-alt-nav-sides ${volumenes[id-1].prevColor}`} onClick={()=>{handleNavigate( id, 'back' )}} >{'<'}</div>
                    <div className={`module-alt-nav-sides ${volumenes[id-1].nextColor}`} onClick={()=>{handleNavigate( id, 'forward' )}}>{'>'}</div>
                </div>
                <h1 className={`side-nav ${volumenes[id-1].prevColor}`} onClick={()=>{handleNavigate( id, 'back' )}}>{volumen.anterior}</h1>
                <h1>{ volumen.titulo }</h1>
                <h1 className={`side-nav ${volumenes[id-1].nextColor}`} onClick={()=>{handleNavigate( id, 'forward')}}>{volumen.siguiente}</h1>
            </div>
            
            <Module info={volumenes[id-1].modulo[0]}/>

            <Module info={moduleVolumeOne[0]}/>
            <Module info={moduleVolumeOne[1]}/>
            <Module info={moduleVolumeOne[2]}/>

            <svg className='module-logo-bg' fill={volumen.bgcolor} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 831.34"><title>Simbolo</title><path d="M834.48,621.44c-11.56-6.9-42.23-24.86-63.65-37.31l-.38-.24-13.71-8L836,530l-81.4-47.12V195.94L419.46,2,86.64,194.61l-.73.4v288.8L5.5,530.37l78.2,45.26L69.32,584l-.18.12-.08,0L3.4,622.54l353,204.25.73.44,63.3-36.65L483,826.79l.38.2h.79L836.6,622.72ZM420.42,787.21,86.54,594.07l14.35-8.38h0L412,765.64V383.46L106.43,206.6l313-181.14L733.11,207l-89.64,51.83L405.08,120.86l-20.25,11.73,143.51,83L439.69,267,296.18,183.9l-20.29,11.7,238.42,138L428.45,383.2V765.85l309.08-178.8v0l2.13-1.22,13.39,7.8ZM733.49,230.46v335L449.58,729.82V394.75Z"/><polygon points="652.03 478.13 651.88 523.62 560.64 576.41 560.64 531.01 581.77 518.76 581.77 540.38 630.87 511.95 630.87 490.35 652.03 478.13"/><polygon points="539.64 433.82 539.64 534.31 510.57 551.13 510.57 450.64 539.64 433.82"/><polygon points="692.22 347.68 692.22 448.17 663.14 464.99 663.14 364.5 692.22 347.68"/></svg>
            <footer className='module-footer'>
                <button onClick={() => navigate('/')}>Volver al inicio</button>
            </footer>
        </main>
        {portal && <Modal section={selectedSection} content={volumenes[id-1]} color={volumenes[id-1].bgcolor} handleClose={handleClosePortal}/>}
    </div>
  )
}