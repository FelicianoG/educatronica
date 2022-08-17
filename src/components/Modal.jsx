import ReactDOM from 'react-dom'
import myContext from '../context/store.js'
import React, { useState, useContext, useEffect } from 'react'
import { db } from '../firebase.js';
import { collection, addDoc, doc, getDocs, getDoc } from "firebase/firestore";
import { semaforo } from '../firestore/download-links'

export default function Modal({color, handleClose, content}) {

async function handleTest(){  

//   await addDoc(collection(db, "item"), {   //add document to collection
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });



//get documents from collection
// const querySnapshot = await getDocs(collection(db, "item"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data().name}`);
// });

//getOne
const docRef = doc(db, "item", "6TDA9TGMHkIle0URa1Ec");
const docSnap = await getDoc(docRef);
console.log(docSnap.data().name)
setDownloadURL(docSnap.data().name)

    }

    const [downloadURL, setDownloadURL] = useState('default')
    const context = useContext(myContext)

   useEffect(()=>{
    setDownloadURL(context.semaforoPDFURL)
   },[context])
    
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
        border:'solid black 2px',
        color: 'white',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:'30px',
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

    const contexto = useContext(context)

  return ReactDOM.createPortal(
    <>
        <div style={OVERLAY_STYLES} onClick={()=>{handleClose()}}>
            <div style={MODAL_STYLES} onClick={ e => e.stopPropagation()}>
                <h1 style={{color:color,fontSize: 'calc( .5vw + 20px)'}}>This is a {content.color} portal</h1>
                <h2>This color is dynamic: {content.color}</h2>
                <h2>this is {'contexto'}</h2>
                <h3>I fetched this: {downloadURL}</h3>
                <a href={semaforo} style={BUTTON_STYLES} download={semaforo}>DESCARGA</a>
                
            </div>
        </div>

        
    </>
    ,
    document.getElementById('portal')
    )
  
}
