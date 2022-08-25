import React from 'react'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Volumen from './pages/Volumen'
import Login from './pages/Login'
import Modulo from './pages/module-page/ModulePage'
import myContext from './context/store.js'
import { useEffect, useState } from 'react'
import PDFViewer from './pages/PDFViewer'
import json from './context/JSON.json'
import axios from 'axios'

export default function App() {

    const [ testContext, setTestContext ] = useState(json)
    useEffect(()=>{
        axios.get('https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/JSON.json?alt=media&token=51f4b646-0ae1-47eb-a9a2-8e8be5bfc24a')
        .then( data => { setTestContext(data.data) } ).catch( err => console.log(err))
    },[])
    

  return (
    <div>    
        <myContext.Provider value={testContext}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/pdf" element={ <PDFViewer/> }></Route>
                    <Route path="/volumenes" element={ <Volumen/> }>
                        <Route path=":id" element={ <Volumen/> } />
                    </Route>
                    <Route path="/modulos" element={ <Modulo/> }>
                        <Route path=":id" element={ <Modulo/> } />
                    </Route>
                    <Route path="/login" element={ <Login/> }/>
                </Routes>
            </BrowserRouter>
        </myContext.Provider>
    </div>
  )
}
