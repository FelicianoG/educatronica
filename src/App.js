import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Volumen from "./pages/Volumen";
import Modulo from "./pages/Modulos";
import myContext from "./context/store.js";
import { useState } from "react";
import PDFViewer from "./pages/PDFViewer";
import { json } from "./context/json2.js";
import Modelo3D from "./Three/Modelo3D";
import Modelo3DInterno from "./Three/Modelo3DInterno";
import Modelo3DGlb from "./Three/Modelo3DGlb";

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
            <Route path="/modulos" element={<Modulo />}>
              <Route path=":id" element={<Modulo />} />
            </Route>
            <Route path="/modelo" element={<Modelo3D />}>
              <Route path=":id" element={<Modelo3D />} />
            </Route>
            <Route path="/modelo2" element={<Modelo3DInterno />}>
              <Route path=":id" element={<Modelo3DInterno />} />
            </Route>
            <Route path="/modeloglb" element={<Modelo3DGlb />}>
              <Route path=":id" element={<Modelo3DGlb />} />
            </Route>
          </Routes>
        </HashRouter>
      </myContext.Provider>
    </div>
  );
}
