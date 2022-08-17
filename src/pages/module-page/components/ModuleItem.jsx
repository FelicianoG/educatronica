import React from 'react'
import { v4 as uuid } from 'uuid'

export default function ModuleItem({ mes }) {
  return (
    <div className='module-cuadro-item'>
        <p className='title'>{mes.mes}</p>
        <ul>
            {mes.objetos.map((obj)=>{
                return <div>
                    <li key={uuid()}>{obj.texto}</li>
                    {obj.recursos.map((o)=>{return <a style={{display:'block'}} href='/' className='secondary-list' key={uuid()}>{o.tipo}</a>})}
                </div>})}
        </ul>
    </div>
  )
}
