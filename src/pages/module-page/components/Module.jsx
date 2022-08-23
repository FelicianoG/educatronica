import React from 'react'
import ModuleItem from './ModuleItem'
import { v4 as uuid } from 'uuid'

export default function Module({info, setPortal, setVideoURL}) {
  return (
    <div>
        <h2 className='module-title'>{info.title}</h2>
        <h3>{info.subtitle}</h3>
        <section className='module-cuadros-stack'>
            <div className='module-cuadro-row'>
              {info.meses.map((mes)=>{return <ModuleItem key={ uuid() } mes={ mes } setPortal={setPortal} setVideoURL={setVideoURL}/>})}
            </div>
        </section>
    </div>
  )
}
