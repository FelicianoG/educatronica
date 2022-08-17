import React from 'react'
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Volumen from './pages/Volumen'
import myContext from './context/store.js'
import { useState, useEffect, useContext } from 'react'

export default function App() {
    
    const contexto = useContext(myContext)
      
  return (
    <div>    
        <myContext.Provider value={contexto}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/volumenes" element={ <Volumen/> }>
                    <Route path=":id" element={ <Volumen/> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </myContext.Provider>
    </div>
  )
}
