import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Volumen from "./pages/Volumen";
import Login from "./pages/Login";
import Modulo from "./pages/module-page/ModulePage";
import myContext from "./context/store.js";
import { useState } from "react";
import PDFViewer from "./pages/PDFViewer";
import { json } from "./context/json2.js";
import Modelo3D from "./Three/Modelo3D";

export default function App() {
  const [testContext] = useState(json);

  return (
    <div>
      <myContext.Provider value={testContext}>
        <HashRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/pdf" element={<PDFViewer />}>
              <Route path=":libro" element={<Volumen />} />
            </Route>
            <Route path="/volumenes" element={<Volumen />}>
              <Route path=":id" element={<Volumen />} />
            </Route>
            <Route path="/modelo" element={<Modelo3D />}>
              <Route path=":id" element={<Modelo3D />} />
            </Route>
            <Route path="/modulos" element={<Modulo />}>
              <Route path=":id" element={<Modulo />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </HashRouter>
      </myContext.Provider>
    </div>
  );
}
