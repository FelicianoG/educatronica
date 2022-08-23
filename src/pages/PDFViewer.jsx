import React from 'react'

export default function PDFViewer() {


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
        <iframe title='PDF' style={{width:'calc(100%)',height:'calc(35vw * 2)'}} src="http://online.anyflip.com/zrvcx/dtmh/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"/>
    </div>
  )
}
