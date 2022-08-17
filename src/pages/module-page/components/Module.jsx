import React from 'react'
import ModuleItem from './ModuleItem'
import { v4 as uuid } from 'uuid'

export default function Module({info}) {
  return (
    <div>
        <h2 className='module-title'>{info.title}</h2>
        <h3>Conociendo las disciplinas que forman parte de la robótica.</h3>
        <section className='module-cuadros-stack'>
            <div className='module-cuadro-row'>
                {info.meses.map((mes)=>{return <ModuleItem key={ uuid() } mes={ mes }/>})}
            </div>
        </section>
    </div>
  )
}
