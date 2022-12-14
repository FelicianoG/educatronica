import React from "react";
import "./modulePage.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import contextStore from "../../context/store";
import Module from "./components/Module";
import VideoModal from "../../components/VideoModal";

export default function ModulePage({ inicial }) {
  const navigate = useNavigate();
  const params = useParams();
  const context = useContext(contextStore);

  const moduleVolumeOne = context.moduleVolumeOne;
  const moduleVolumeTwo = context.moduleVolumeTwo;
  const moduleVolumeThree = context.moduleVolumeThree;

  if (!params.id || params.id < 1 || params.id > 3) {
    params.id = 1;
  }

  useEffect(() => window.scrollTo(0, 0), []);

  const [portal, setPortal] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  function handleClosePortal() {
    setPortal(false);
  }

  const [selectedSection] = useState("");

  const volumenes = [
    {
      modulo: moduleVolumeOne,
      kit: {
        titulo: "Kit de educatronica",
        mensaje: "Haz click aqui para descargar el kit de educatronica",
        link: context.semaforoPDFURL,
      },
      bgcolor: context.bgColors.one,
      color: "green",
      nextColor: "hoverorange",
      prevColor: "hoverblue",
      titulo: "VOLUMEN I",
      anterior: "VOLUMEN III",
      siguiente: "VOLUMEN II",
      grado: "1o",
    },
    {
      modulo: moduleVolumeTwo,
      bgcolor: context.bgColors.two,
      color: "orange",
      nextColor: "hoverblue",
      prevColor: "hovergreen",
      titulo: "VOLUMEN II",
      anterior: "VOLUMEN I",
      siguiente: "VOLUMEN III",
      grado: "2o",
    },
    {
      modulo: moduleVolumeThree,
      bgcolor: context.bgColors.three,
      color: "blue",
      nextColor: "hovergreen",
      prevColor: "hoverorange",
      titulo: "VOLUMEN III",
      anterior: "VOLUMEN II",
      siguiente: "VOLUMEN I",
      grado: "3o",
    },
  ];
  const [volumen, setVolumen] = useState(volumenes[params.id - 1]);
  const [id, setId] = useState(parseFloat(params.id));

  function handleNavigate(id, direction) {
    id = parseFloat(id);
    let nextId;
    if (direction === "forward") {
      nextId = id + 1;
    } else if (direction === "back") {
      nextId = id - 1;
    }
    if (nextId < 1) {
      nextId = 3;
    } else if (nextId > 3) {
      nextId = 1;
    }
    navigate(`/modulos/${nextId}`);
    setId(nextId);
    setVolumen(volumenes[nextId - 1]);
  }

  return (
    <div className="App">
      <main id="module-container" className={volumen.color}>
        <div className="module-title-container">
          <div style={{ padding: "10px" }} className="module-alt-nav">
            <div
              style={{ width: "10%" }}
              className={`module-alt-nav-sides ${volumenes[id - 1].prevColor}`}
              onClick={() => {
                handleNavigate(id, "back");
              }}
            >
              {"<"}
            </div>
            <div
              style={{ width: "10%" }}
              className={`module-alt-nav-sides ${volumenes[id - 1].nextColor}`}
              onClick={() => {
                handleNavigate(id, "forward");
              }}
            >
              {">"}
            </div>
          </div>
          <h1
            className={`side-nav ${volumenes[id - 1].prevColor}`}
            onClick={() => {
              handleNavigate(id, "back");
            }}
          >
            {volumen.anterior}
          </h1>
          <h1>{volumen.titulo}</h1>
          <h1
            className={`side-nav ${volumenes[id - 1].nextColor}`}
            onClick={() => {
              handleNavigate(id, "forward");
            }}
          >
            {volumen.siguiente}
          </h1>
        </div>

        <Module
          info={volumenes[id - 1].modulo[0]}
          setPortal={setPortal}
          setVideoURL={setVideoURL}
        />
        <Module
          info={volumenes[id - 1].modulo[1]}
          setPortal={setPortal}
          setVideoURL={setVideoURL}
        />
        <Module
          info={volumenes[id - 1].modulo[2]}
          setPortal={setPortal}
          setVideoURL={setVideoURL}
        />

        <svg
          className="module-logo-bg"
          fill={volumen.bgcolor}
          id="Capa_1"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 840 831.34"
        >
          <title>Simbolo</title>
          <path d="M834.48,621.44c-11.56-6.9-42.23-24.86-63.65-37.31l-.38-.24-13.71-8L836,530l-81.4-47.12V195.94L419.46,2,86.64,194.61l-.73.4v288.8L5.5,530.37l78.2,45.26L69.32,584l-.18.12-.08,0L3.4,622.54l353,204.25.73.44,63.3-36.65L483,826.79l.38.2h.79L836.6,622.72ZM420.42,787.21,86.54,594.07l14.35-8.38h0L412,765.64V383.46L106.43,206.6l313-181.14L733.11,207l-89.64,51.83L405.08,120.86l-20.25,11.73,143.51,83L439.69,267,296.18,183.9l-20.29,11.7,238.42,138L428.45,383.2V765.85l309.08-178.8v0l2.13-1.22,13.39,7.8ZM733.49,230.46v335L449.58,729.82V394.75Z" />
          <polygon points="652.03 478.13 651.88 523.62 560.64 576.41 560.64 531.01 581.77 518.76 581.77 540.38 630.87 511.95 630.87 490.35 652.03 478.13" />
          <polygon points="539.64 433.82 539.64 534.31 510.57 551.13 510.57 450.64 539.64 433.82" />
          <polygon points="692.22 347.68 692.22 448.17 663.14 464.99 663.14 364.5 692.22 347.68" />
        </svg>
        <footer className="module-footer">
          <button onClick={() => navigate(`/volumenes/${id}`)}>Volver</button>
        </footer>
      </main>
      {/* {portal && <Modal section={selectedSection} content={volumenes[id-1]} color={volumenes[id-1].bgcolor} handleClose={handleClosePortal}/>} */}
      {portal && (
        <VideoModal
          videoURL={videoURL}
          section={selectedSection}
          content={volumenes[id - 1]}
          color={volumenes[id - 1].bgcolor}
          handleClose={handleClosePortal}
        />
      )}
    </div>
  );
}
