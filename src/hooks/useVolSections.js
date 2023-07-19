import { useContext } from "react";
import contextStore from "../context/store";
export function useVolSections() {
  const context = useContext(contextStore);
  const sections = [
    {
      kit: {
        titulo: "Kit de educatronica",
        mensaje: ["Haz click aquí para descargar el kit de Educatrónica"],
        link: context.volumeOneURLS.kit,
      },
      instalacion: {
        titulo: "Instalación y configuración",
        mensaje: ["Haz click aquí para descargar el manual de instalación y configuración"],
        link: context.volumeOneURLS.instalacion,
      },
      libro: {
        titulo: "Libro de trabajo",
        mensaje: ["Haz click aquí para descargar el libro de trabajo"],
        link: context.volumeOneURLS.nav,
        url: context.volumeOneURLS.libroDescarga,
      },
      evaluacion: {
        titulo: "Evaluación diagnóstica",
        mensaje: ["Haz click aquí para descargar el manual de evaluación diagnóstica"],
        link: context.volumeOneURLS.evaluacion,
      },
      nano: {
        titulo: "Recursos educativos con Arduino NANO",
        mensaje: ["Nota: El soporte para Arduino Nano cesará próximamente."],
        link: context.volumeOneURLS.nano,
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
      kit: {
        titulo: "Kit de educatronica",
        mensaje: ["Haz click aquí para descargar el kit de Educatrónica"],
        link: context.volumeTwoURLS.kit,
      },
      instalacion: {
        titulo: "Instalación y configuración",
        mensaje: ["Haz click aquí para descargar el manual de instalación y configuración"],
        link: context.volumeTwoURLS.instalacion,
      },
      libro: {
        titulo: "Libro de trabajo",
        mensaje: ["Haz click aquí para descargar el libro de trabajo"],
        link: context.volumeTwoURLS.nav,
        url: context.volumeTwoURLS.libroDescarga,
      },
      evaluacion: {
        titulo: "Evaluación diagnóstica",
        mensaje: ["Haz click aquí para descargar el manual de evaluación diagnóstica"],
        link: context.volumeTwoURLS.evaluacion,
      },
      nano: {
        titulo: "Recursos educativos con Arduino NANO",
        mensaje: ["Nota: El soporte para Arduino Nano cesará próximamente."],
        link: context.volumeOneURLS.nano,
      },
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
      kit: {
        titulo: "Kit de educatronica",
        mensaje: ["Haz click aquí para descargar el kit de Educatrónica"],
        link: context.volumeThreeURLS.kit,
      },
      instalacion: {
        titulo: "Instalación y configuración",
        mensaje: ["Haz click aquí para descargar el manual de instalación y configuración"],
        link: context.volumeThreeURLS.instalacion,
      },
      libro: {
        titulo: "Libro de trabajo",
        mensaje: ["Haz click aquí para descargar el libro de trabajo"],
        link: context.volumeThreeURLS.nav,
        url: context.volumeThreeURLS.libroDescarga,
      },
      evaluacion: {
        titulo: "Evaluación diagnóstica",
        mensaje: ["Haz click aquí para descargar el manual de evaluación diagnóstica"],
        link: context.volumeThreeURLS.evaluacion,
      },
      nano: {
        titulo: "Recursos educativos con Arduino NANO",
        mensaje: ["Nota: El soporte para Arduino Nano cesará próximamente."],
        link: context.volumeOneURLS.nano,
      },
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
  return sections;
}
