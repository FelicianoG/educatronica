import ReactDOM from 'react-dom'
import useWindowWidth from '../hooks/useWindowWidth'
import { PDFReader } from 'reactjs-pdf-reader';

export default function Modal({ handleClose, content, videoURL }) {
    
    const width = useWindowWidth();
    
    let color = content.bgcolor

    color = color.split('')
    color.splice((color.length - 4),3)
    color.splice((3),1)
    color = color.join('')

    const OVERLAY_STYLES = {
        position: 'fixed',
        padding:'20px 0',
        top:0,
        bottop:0,
        left:0,
        right:0,
        backgroundColor:'rgba(0,0,0,.8)',
        zIndex:4,
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
    }
    const MODAL_STYLES = {
        
        width: width > 1050 ? '70%' : '100%',
        maxWidth: '800px',
        minHeight:'500px',
        color: 'white',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center', 
        backgroundColor:'black'
    }

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES} onClick={()=>{handleClose()}}>
                <div style={MODAL_STYLES} onClick={ e => e.stopPropagation()}>
                {width < 1050 ? 
                <iframe width={width} height={width / 1.33} src={videoURL} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : 
                <iframe width="672" height="378" src={videoURL} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                }
                </div>
            </div>
        </>
        ,
        document.getElementById('portal')
    )
  
}
