import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import contextStore from '../context/store'

export default function PDFViewer() {

  const params = useParams()
  const context = useContext(contextStore)
  const volumes = [null,context.volumeOneURLS,context.volumeTwoURLS,context.volumeThreeURLS]

  const CONTAINER_STYLES = {
    backgroundColor:'black',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alingItems:'center',
    width:'100%',
    height:'100vh'
  }


  return (
    <div style={CONTAINER_STYLES}>
        <iframe title='PDF' style={{width:'calc(100%)',height:'calc(35vw * 2)'}} src={volumes[params.libro].libro} seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"/>
    </div>
  )
}
