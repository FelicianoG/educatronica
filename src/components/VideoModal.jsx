import ReactDOM from 'react-dom'

export default function Modal({ handleClose, content, videoURL }) {

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
        minHeight:'500px',
        border:'solid black 2px',
        color: 'white',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        boxShadow: '-5px 5px 5px #bbb',  
    }
    const BUTTON_STYLES = {
        backgroundColor: color,
        border: 'none',
        padding:'10px 20px',
        borderRadius: '20px',
        margin: '30px',
        textDecoration:'none',
    }

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES} onClick={()=>{handleClose()}}>
                <div style={MODAL_STYLES} onClick={ e => e.stopPropagation()}>
                <iframe width="672" height="378" src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </>
        ,
        document.getElementById('portal')
    )
  
}
