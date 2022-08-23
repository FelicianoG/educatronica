import React from 'react'
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Volumen from './pages/Volumen'
import Login from './pages/Login'
import Modulo from './pages/module-page/ModulePage'
import myContext from './context/store.js'
import { useContext } from 'react'
import PDFViewer from './pages/PDFViewer';

export default function App() {
    
    const contexto = useContext(myContext)
      
  return (
    <div>    
        <myContext.Provider value={contexto}>
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
