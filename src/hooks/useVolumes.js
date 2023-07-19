import { useContext } from "react";
import contextStore from "../context/store";

export function useVolumes() {
  const context = useContext(contextStore);

  const moduleVolumeOne = context.moduleVolumeOne;
  const moduleVolumeTwo = context.moduleVolumeTwo;
  const moduleVolumeThree = context.moduleVolumeThree;

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

  return volumenes;
}
