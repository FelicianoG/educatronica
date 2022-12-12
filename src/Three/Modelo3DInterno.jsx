import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Html } from "@react-three/drei";
import { Model as PruebaEducatronica } from "./models/PruebaEducatronica";
import useWindowDimensions from "../hooks/useWindowDimensions";
import logoMain from "../images/logoMain.svg";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";

const STYLE = {
  width: "100%",
  height: "100%",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "0",
};

const FallbackGeo = () => {
  return (
    <mesh>
      <Html position={[-3.5, 2, 0]}>
        <h1 style={{ backgroundColor: "red", padding: "20px", borderRadius: "15px", width: "300px", textAlign: "center" }}>Cargando el Modelo</h1>
      </Html>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default function Modelo3D() {
  const navigate = useNavigate();
  const [width, height] = useWindowDimensions();
  return (
    <div style={{ width: "100vw", height: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ zIndex: "1", backgroundColor: "#000000AA", width: "100%", position: "fixed", left: "0", top: "0", margin: "0" }}>
        <img
          onClick={() => {
            navigate("/");
          }}
          style={{ margin: "10px", width: "180px", position: "relative" }}
          src={logoMain}
          alt="Logo Educatronica"
        />
      </div>

      <div id="canvas-container" style={STYLE}>
        <Canvas style={{ background: "#66CCFF" }}>
          <Suspense fallback={<FallbackGeo />}>
            <ErrorBoundary fallback={<FallbackGeo />}>
              <PruebaEducatronica></PruebaEducatronica>
              <OrbitControls enablePan={true} enableZoom={true} minPolarAngle={Math.PI / 8} maxPolarAngle={Math.PI / 2} />
              <Environment preset="forest" />
              <PerspectiveCamera aspect={width / height} fov={15} makeDefault manual position={[2, 5, 2]} />
            </ErrorBoundary>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
