import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'

export default function Modal({ handleClose, content, section }) {

    const navigate = useNavigate()
    let color = content.bgcolor

    color = color.split('')
    color.splice((color.length - 4),3)
    color.splice((3),1)
    color = color.join('')

    const OVERLAY_STYLES = {
        position: 'fixed',
        top:0,
        bottop:0,
        left:0,
        right:0,
        backgroundColor:'rgba(255,255,255,.9)',
        zIndex:4,
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
    }
    const MODAL_STYLES = {
        backgroundColor:'black',
        width:'70%',
        minHeight:'300px',
        color: 'white',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems:'center',

        boxShadow: '-5px 5px 5px #bbb'
    }
    const BUTTON_STYLES = {
        backgroundColor: color,
        padding:'10px 20px',
        borderRadius: '20px',
        textDecoration:'none',
        textAlign:'center',
        margin:'8px'
    }
    const CLOSE_STYLES = {
        padding:'0 15px 0 0',
        margin:'0',
        fontSize:'2rem',
        fontWeight:'900',
        color:'white',
        cursor:'pointer',
        textAlign:'right',
        JustifySelf:'flex-start',

    }

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES} onClick={()=>{handleClose()}}>

                <div style={MODAL_STYLES} onClick={ e => e.stopPropagation()}>
                    <div style={{ width:'100%'}}>

                        <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                            <p style={{...CLOSE_STYLES }}onClick={()=>{handleClose()}}>x</p>
                        </div>
                        <div style={{height:'300px',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                            <h1 style={{textAlign:'center', color:color,fontSize: 'calc( .5vw + 20px)', margin:'0 0 15px 0',padding:'0 20px'}}>
                                {content[section].titulo}
                            </h1>

                            <h2 style={{padding:'0 45px', textAlign:'center'}}>
                                {content[section].mensaje}
                            </h2>
                            <div style={{marginTop:'20px',display:'flex',flexDirection:'column', alignItems:'center'}}>
                            { content[section].titulo === 'Libro de trabajo' ? 
                                
                                    <p onClick={()=>{navigate(content[section].link)}}style={{...BUTTON_STYLES,  color:'black', cursor:'pointer'}}>VER</p>
                                    
                                
                                :
                                null
                            }
                            <a href={content[section].url} target="_blank" rel='noreferrer' download={content[section].link} style={{...BUTTON_STYLES}}>DESCARGAR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        ,
        document.getElementById('portal')
    )
  
}
