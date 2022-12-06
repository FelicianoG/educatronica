const PUBLIC_URL = process.env.PUBLIC_URL;

export const json = {
  bgColors: { one: "rgba(109,154,12,.2)", two: "rgba(245,135,10,.2)", three: "rgba(221,202 ,2,.2)" },
  semaforoPDFURL: "",
  volumeOneURLS: {
    kit: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Kit-de-educatrónica/Esp-basicas-kit-Educatronica-1-22.pdf",
    evaluacion: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Evaluación-diagnóstica/Evaluación-diagnostica-Educatronica-1.pdf",
    instalacion: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Instalación-y-configuración/Guia-instalacion-y-configuracion-Educatronica-1-y-2.pdf",
    libroDescarga: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Libro/Educatronica-Volumen-I-2022.pdf",
    libro: "https://online.anyflip.com/zrvcx/lyyx/index.html",
    nav: "/pdf/1",
    nano: "https://drive.google.com/drive/folders/1YzKVZtZFVQ5XPfOlZlKltlzqs9V-pm0j?usp=share_link",
  },
  volumeTwoURLS: {
    kit: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Kit-de-educatrónica/Esp-basicas-kit-Educatronica-2-22.pdf",
    evaluacion: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Evaluación-diagnóstica/Evaluación-diagnostica-Educatronica-2.pdf",
    instalacion: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Instalación-y-configuración/Guia-instalacion-y-configuracion-Educatronica-1-y-2.pdf",
    libroDescarga: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Libro/Educatrónica-Volumen-II-2022.pdf",
    libro: "https://online.anyflip.com/zrvcx/etdb/index.html",
    nav: "/pdf/2",
    nano: "https://drive.google.com/drive/folders/1YzKVZtZFVQ5XPfOlZlKltlzqs9V-pm0j?usp=share_link",
  },
  volumeThreeURLS: {
    kit: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Kit-de-educatrónica/Esp-basicas-kit-Educatronica-3-22.pdf",
    evaluacion: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Evaluación-diagnóstica/Evaluación-diagnóstica-Educatronica-3.pdf",
    instalacion: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Instalación-y-configuración/Guia-instalacion-y-configuracion-Educatronica-3.pdf",
    libroDescarga: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Libro/Educatrónica-Volumen-III-2022.pdf",
    libro: "https://online.anyflip.com/zrvcx/ozix/index.html",
    nav: "/pdf/3",
    nano: "https://drive.google.com/drive/folders/1YzKVZtZFVQ5XPfOlZlKltlzqs9V-pm0j?usp=share_link",
  },
  moduleVolumeOne: [
    {
      title: "Módulo 1",
      subtitle: "Conociendo las disciplinas que forman parte de la robótica",
      meses: [
        {
          mes: "Septiembre",
          objetos: [
            {
              texto: "Introducción general",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-GENERAL.pptx",
                },
              ],
            },
            {
              texto: "Introducción a la electricidad",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LA-ELECTRICIDAD.pptx",
                },
              ],
            },
            {
              texto: "Introducción a la electrónica",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LA-ELECTRÓNICA.pptx",
                },
              ],
            },
            {
              texto: "Introducción a la programación",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LA-PROGRAMACIÓN.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Octubre",
          objetos: [
            {
              texto: "Componentes electrónicos 1",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Teoria/COMPONENTES-ELECTRÓNICOS-1.pptx",
                },
              ],
            },
            {
              texto: "Componentes electrónicos 2",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Teoria/COMPONENTES-ELECTRÓNICOS-2.pptx",
                },
              ],
            },
            {
              texto: "Plataforma Scratch para Arduino 1",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Teoria/PLATAFORMA-SCRATCH-1.pptx",
                },
              ],
            },
            {
              texto: "Plataforma Scratch para Arduino 2",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Teoria/PLATAFORMA-SCRATCH-2.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Noviembre",
          objetos: [
            {
              texto: "Práctica 1 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto1/E1-PA1-LED.pptx",
                },
                {
                  tipo: "Modelo 3d",
                  url: "/#/modelo",
                },
              ],
            },
            {
              texto: "Práctica 2 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto1/E1-PA2-LED.pptx",
                },
              ],
            },
            {
              texto: "Práctica 3 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto1/E1-PA3-LED.pptx",
                },
              ],
            },
            {
              texto: "Práctica 4 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto1/E1-PA4-LED.pptx",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Módulo 2",
      subtitle: "Descubrir y explorar más sobre Educatrónica",
      meses: [
        {
          mes: "Diciembre",
          objetos: [
            {
              texto: "Práctica 5 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto1/E1-PA5-LED.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 1 - Semáforo",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto1/E1-PO1-SEMÁFORO.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/c7e9Q_Zl7dc" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/qPNu5rBS-3o" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto1/HM-E1-P1-Semáforo.pdf",
                },
              ],
            },
            {
              texto: "Práctica 6 - Zumbador",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto2/E1-PA6-ZUMBADOR.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 2 - Carro policía",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto2/E1-PO2-CARRO POLICÍA.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/5SdtM3J36MU" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/1FueBFvBiRg" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto2/HM-E1-P2-Carro policía.pdf",
                },
              ],
            },
          ],
        },
        {
          mes: "Enero",
          objetos: [
            {
              texto: "Práctica 7 - Motor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto3/E1-PA7-MOTOR.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 3 - Helicóptero",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto3/E1-PO3-HELICÓPTERO.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/XjGsmqThIBw" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/HbMDiSxQkxc" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto3/HM-E1-P3-Helicóptero.pdf",
                },
              ],
            },
            {
              texto: "Práctica 8 - Servomotor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto4/E1-PA8-SERVOMOTOR.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 4 - Futbol",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto4/E1-PO4-FUTBOL.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/tO2EJTwhJ9E" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/8JPgIUFn1Pk" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto4/HM-E1-P4-Futbol.pdf",
                },
              ],
            },
          ],
        },
        {
          mes: "Febrero",
          objetos: [
            {
              texto: "Práctica 9 - Sensor de luz",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto5/E1-PA9-SENSOR-DE-LUZ.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 5 - Alumbrado público",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto5/E1-PO5-ALUMBRADO-PÚBLICO.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/mf9Tq5IqtqU" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/wjWO5hIb4oo" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto5/HM-E1-P5-Alumbrado-público.pdf",
                },
              ],
            },
            {
              texto: "Práctica 10 - Sensor de distancia",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto6/E1-PA10-SENSOR-DE-DISTANCIA.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 6 - Pluma de estacionamiento",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto6/E1-PO6-PLUMA-DE-ESTACIONAMIENTO.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/U4Y91G_ZgYk" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/ToxIu1NLAj4" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto6/HM-E1-P6-Pluma-de-estacionamiento.pdf",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Módulo 3",
      subtitle: "Armando ideas",
      meses: [
        {
          mes: "Marzo",
          objetos: [
            {
              texto: "Práctica 11 - Sensor de lluvia",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto7/E1-PA11-SENSOR-DE-LLUVIA.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 7 - puerta de mascota",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto7/E1-PO7-PUERTA-DE-MASCOTA.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/5GSgcz9dFYc" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/HKLZDDgk330" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto7/HM-E1-P7-Puerta-de-mascota.pdf",
                },
              ],
            },
            {
              texto: "Práctica 12 - Sensor de temperatura",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto8/E1-PA12-SENSOR-DE-TEMPERATURA.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 8 - Congelador",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto8/E1-PO8-CONGELADOR.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/TIoOlOd0mE4" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/1MLorgTr9qo" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-1/Presentaciones-de-clase/Proyecto8/HM-E1-P8-Congelador.pdf",
                },
              ],
            },
          ],
        },
        { mes: "Abril", objetos: [{ texto: "Competencia", recursos: [{ tipo: "Convocatoria", url: "" }] }] },
      ],
    },
  ],
  moduleVolumeTwo: [
    {
      title: "Módulo 1",
      subtitle: "Conociendo la relación de las disciplinas que forman parte de la robótica",
      meses: [
        {
          mes: "Septiembre",
          objetos: [
            {
              texto: "Introducción general 1",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-GENERAL-1.pptx",
                },
              ],
            },
            {
              texto: "Introducción general 2",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-GENERAL-2.pptx",
                },
              ],
            },
            {
              texto: "Elementos de la robótica",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Teoria/ELEMENTOS-DE-LA-ROBÓTICA.pptx",
                },
              ],
            },
            {
              texto: "Componentes electrónicos 1",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Teoria/COMPONENTES-ELECTRÓNICOS-1.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Octubre",
          objetos: [
            {
              texto: "Componentes electrónicos 2",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Teoria/COMPONENTES-ELECTRÓNICOS-2.pptx",
                },
              ],
            },
            {
              texto: "Plataforma Scratch para Arduino 1",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Teoria/PLATAFORMA-SCRATCH-1.pptx",
                },
              ],
            },
            {
              texto: "Plataforma Scratch para Arduino 2",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Teoria/PLATAFORMA-SCRATCH-2.pptx",
                },
              ],
            },
            {
              texto: "Práctica 1 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto1/E2-PA1-LED.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Noviembre",
          objetos: [
            {
              texto: "Práctica 2 - Bocina",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto1/E2-PA2-BOCINA.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 1 - Camión escolar",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto1/E2-PO1-CAMIÓN-ESCOLAR.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/Swq8RN0syV4" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/jU6wmkU3x8U" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto1/HM-E2-P1-Camión-escolar.pdf",
                },
              ],
            },
            {
              texto: "Práctica 3 - RGB",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto2/E2-PA3-RGB.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 2 - Piano",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto2/E2-PO2-PIANO.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/nuWLplfLXTQ" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/DPvL-Rh65MQ" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto2/HM-E2-P2-Piano.pdf",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Módulo 2",
      subtitle: "Descubrir y explorar más sobre Educatrónica",
      meses: [
        {
          mes: "Diciembre",
          objetos: [
            {
              texto: "Práctica 4 - Sensor touch",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto3/E2-PA4-SENSOR-TOUCH.pptx",
                },
              ],
            },
            {
              texto: "Práctica 5 - Servomotor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto3/E2-PA5-SERVOMOTOR.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 3 - Aire acondicionado",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto3/E2-PO3-AIRE-ACONDICIONADO.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/c5gohiok6iE" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/X-4xFaoClAw" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto3/HM-E2-P3-Aire-acondicionado.pdf",
                },
              ],
            },
            {
              texto: "Práctica 6 - Potenciómetro",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto4/E2-PA6-POTENCIÓMETRO.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Enero",
          objetos: [
            {
              texto: "Práctica 7 - Servomotor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto4/E2-PA7-SERVOMOTOR.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 4 - Robot",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto4/E2-PO4-ROBOT.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/JhXbkFjeXL8" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/72FXendllv4" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto4/HM-E2-P4-Robot.pdf",
                },
              ],
            },
            {
              texto: "Práctica 8 - Joystick",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto5/E2-PA8-JOYSTICK.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 5 - Beisbol",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto5/E2-PO5-BEISBOL.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/KhDymEYa2VU" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/NgbdQyFWiO4" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto5/HM-E2-P5-Beisbol.pdf",
                },
              ],
            },
          ],
        },
        {
          mes: "Febrero",
          objetos: [
            {
              texto: "Práctica 9 - Sensor infrarrojo",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto6/E2-PA9-SENSOR-INFRARROJO.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 6 - Puerta de acceso",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto6/E2-PO6-PUERTA-DE-ACCESO.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/CUXpKy3lHbo" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/DyHtWuhddww" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto6/HM-E2-P6-Puerta-de-acceso.pdf",
                },
              ],
            },
            {
              texto: "Práctica 10 - Sensor de presencia",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto7/E2-PA10-SENSOR-DE-PRESENCIA.pptx",
                },
              ],
            },
            {
              texto: "Práctica 11 - Display de 7 segmentos",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto7/E2-PA11-DISPLAY-DE-7-SEGMENTOS.pptx",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Módulo 3",
      subtitle: "Armando ideas",
      meses: [
        {
          mes: "Marzo",
          objetos: [
            {
              texto: "Proyecto 7 - Contador de productos",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto7/E2-PO7-CONTADOR-DE-PRODUCTOS.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/W1IwDS4D5nQ" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/9T6-easK-OU" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto7/HM-E2-P7-Contador-de-productos.pdf",
                },
              ],
            },
            {
              texto: "Práctica 12 - Sensor de luz",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto8/E2-PA12-SENSOR-DE-LUZ.pptx",
                },
              ],
            },
            {
              texto: "Práctica 13 - Servomotor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto8/E2-PA13-SERVOMOTOR.pptx",
                },
              ],
            },
            {
              texto: "Proyecto 8 - Panel solar",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto8/E2-PO8-PANEL-SOLAR.pptx",
                },
                { tipo: "Video del funcionamiento", url: "https://www.youtube.com/embed/8-mO7FqEkVk" },
                { tipo: "Videotutorial del armado", url: "https://www.youtube.com/embed/JKHAvdYJ8uE" },
                {
                  tipo: "Hoja de medidas",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-2/Presentaciones-de-clase/Proyecto8/HM-E2-P8-Panel-solar.pdf",
                },
              ],
            },
          ],
        },
        { mes: "Abril", objetos: [{ texto: "Competencia", recursos: [{ tipo: "Convocatoria", url: "" }] }] },
      ],
    },
  ],
  moduleVolumeThree: [
    {
      title: "Módulo 1",
      subtitle: "Conociendo la relación de las disciplinas que forman parte de la robótica",
      meses: [
        {
          mes: "Septiembre",
          objetos: [
            {
              texto: "Introducción general",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-GENERAL.pptx",
                },
              ],
            },
            {
              texto: "Electricidad",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/ELECTRICIDAD.pptx",
                },
              ],
            },
            {
              texto: "Electrónica",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/ELECTRÓNICA.pptx",
                },
              ],
            },
            {
              texto: "Introducción a la programación escrita 1",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LA-PROGRAMACIÓN-ESCRITA-1.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Octubre",
          objetos: [
            {
              texto: "Introducción a la programación escrita 2",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LA-PROGRAMACIÓN-ESCRITA-2.pptx",
                },
              ],
            },
            {
              texto: "Introducción a las variables y tipos de datos",
              recursos: [
                {
                  tipo: "Presentación",
                  url:
                    PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LAS-VARIABLES-Y-TIPOS-DE-DATOS.pptx",
                },
              ],
            },
            {
              texto: "Introducción a los operadores",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LOS-OPERADORES.pptx",
                },
              ],
            },
            {
              texto: "Introducción a las estructuras de control",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LAS-ESTRUCTURAS-DE-CONTROL.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Noviembre",
          objetos: [
            {
              texto: "Introducción a las funciones",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LAS-FUNCIONES.pptx",
                },
              ],
            },
            {
              texto: "Introducción a las librerías",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/INTRODUCCIÓN-A-LAS-LIBRERÍAS.pptx",
                },
              ],
            },
            {
              texto: "Tendencias de la robótica",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/TENDENCIAS-DE-LA-ROBÓTICA.pptx",
                },
              ],
            },
            {
              texto: "Componentes electrónicos 1",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/COMPONENTES-ELECTRÓNICOS-1.pptx",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Módulo 2",
      subtitle: "Descubrir y explorar más sobre Educatrónica",
      meses: [
        {
          mes: "Diciembre",
          objetos: [
            {
              texto: "Componentes electrónicos 2",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/COMPONENTES-ELECTRÓNICOS-2.pptx",
                },
              ],
            },
            {
              texto: "Plataforma Arduino IDE",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/Teoria/PLATAFORMA-ARDUINO-IDE.pptx",
                },
              ],
            },
            {
              texto: "Práctica 1 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA1-LED.pptx",
                },
              ],
            },
            {
              texto: "Práctica 2 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA2-LED.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Enero",
          objetos: [
            {
              texto: "Práctica 3 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA3-LED.pptx",
                },
              ],
            },
            {
              texto: "Práctica 4 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA4-LED.pptx",
                },
              ],
            },
            {
              texto: "Práctica 5 - LED",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA5-LED.pptx",
                },
              ],
            },
            {
              texto: "Práctica 6 - Zumbador",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA6-ZUMBADOR.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Febrero",
          objetos: [
            {
              texto: "Práctica 7 - Servomotor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA7-SERVOMOTOR.pptx",
                },
              ],
            },
            {
              texto: "Práctica 8 - Servomotor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA8-SERVOMOTOR.pptx",
                },
              ],
            },
            {
              texto: "Práctica 9 - Motor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA9-MOTOR.pptx",
                },
              ],
            },
            {
              texto: "Práctica 10 - Sensor de luz",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA10-SENSOR-DE-LUZ.pptx",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Módulo 3",
      subtitle: "Armando ideas",
      meses: [
        {
          mes: "Marzo",
          objetos: [
            {
              texto: "Práctica 11 - Sensor de distancia",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA11-SENSOR-DE-DISTANCIA.pptx",
                },
              ],
            },
            {
              texto: "Práctica 12 - Sensor de lluvia",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA12-SENSOR-DE-LLUVIA.pptx",
                },
              ],
            },
            {
              texto: "Práctica 13 - Potenciómetro",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA13-POTENCIÓMETRO.pptx",
                },
              ],
            },
            {
              texto: "Práctica 14 - Servomotor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA14-SERVOMOTOR.pptx",
                },
              ],
            },
          ],
        },
        {
          mes: "Abril",
          objetos: [
            {
              texto: "Práctica 15 - Sensor de presencia",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA15-SENSOR-DE-PRESENCIA.pptx",
                },
              ],
            },
            {
              texto: "Práctica 16 - Motorreductor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA16-MOTORREDUCTOR.pptx",
                },
              ],
            },
            {
              texto: "Práctica 17 - Motorreductor",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PA17-MOTORREDUCTOR.pptx",
                },
              ],
            },
            {
              texto: "Proyecto carro seguidor de línea",
              recursos: [
                {
                  tipo: "Presentación",
                  url: PUBLIC_URL + "/recursos/Educatrónica-volumen-3/Presentaciones-de-clase/E3-PO1-CARRO-SEGUIDOR-DE-LINEA.pptx",
                },
              ],
            },
          ],
        },
        { mes: "Mayo", objetos: [{ texto: "Competencia", recursos: [{ tipo: "Convocatoria", url: "" }] }] },
      ],
    },
  ],
};
