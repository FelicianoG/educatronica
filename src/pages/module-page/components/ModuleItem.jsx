import React from 'react'
import { v4 as uuid } from 'uuid'

export default function ModuleItem({ mes, setPortal, setVideoURL }) {
  
  function handleVideoModal(videoURL){
    setVideoURL(videoURL)
    setPortal(true)
  }
  
  return (
    <div className='module-cuadro-item'>
        <p className='title'>{mes.mes}</p>
        <ul>
            {mes.objetos.map((obj)=>{
                return <div key={uuid()}>
                    <li key={uuid()}>{obj.texto}</li>
                    {obj.recursos.map((o)=>{
                      if(o.tipo === 'Videotutorial del armado'){return <h5 onClick={() => handleVideoModal(o.url)} className='secondary-list' key={uuid()}>{o.tipo}</h5>}
                      return <a style={{display:'block'}} href={o.url} target="_blank" rel='noreferrer' className='secondary-list' key={uuid()}>{o.tipo}</a>})}
                </div>})}
        </ul>
    </div>
  )
}
