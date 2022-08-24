import { createContext } from "react";

const testURL = 'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/HM-E1-P1-Sema%CC%81foro.pdf?alt=media&token=94360022-14df-459a-8c7e-0cffe6b8194e'

const myContext = createContext({
    
    bgColors : {
        one:'rgba(109,154,12,.2)',
        two:'rgba(245,135,10,.2)',
        three:'rgba(221,202 ,2,.2)'
    },
    semaforoPDFURL:testURL,
    volumeOneURLS:{
        kit:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FEsp.%20basicas%20kit%20Educatronica%201%2022.pdf?alt=media&token=f6f9d9c5-4827-46e1-86d4-8a41139693f9',
        evaluacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FEvaluacio%CC%81n%20diagnostica%20Educatronica%201.pdf?alt=media&token=493537b4-24a1-4823-98fc-6cf0d5b9ea5a',
        instalacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FGuia%20instalacion%20y%20configuracion%20Educatronica%201%20y%202.pdf?alt=media&token=a1b8ea9a-c9ce-4cff-a947-a25ed13fff46'
    },
    volumeTwoURLS:{
        kit:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%202%2FEsp.%20basicas%20kit%20Educatronica%202%2022.pdf?alt=media&token=e6f9bc76-b0cf-412a-a993-33fb45ad12a9',
        evaluacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%202%2FEvaluacio%CC%81n%20diagnostica%20Educatronica%202.pdf?alt=media&token=65c34268-a09c-40a0-9ce9-873e9014c386',
        instalacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%202%2FGuia%20instalacion%20y%20configuracion%20Educatronica%201%20y%202.pdf?alt=media&token=1a40b661-e93f-4682-89b2-3cc387a9c7eb'
    },
    volumeThreeURLS:{
        kit:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%203%2FEsp.%20basicas%20kit%20Educatronica%203%2022.pdf?alt=media&token=7d689952-280c-42c9-aa5a-be85802156c6',
        evaluacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%203%2FEvaluacio%CC%81n%20diagno%CC%81stica%20Educatronica%203.pdf?alt=media&token=55acb7ee-15c4-497a-a229-3b82445b710a',
        instalacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%203%2FGuia%20instalacion%20y%20configuracion%20Educatronica%203.pdf?alt=media&token=51b37b2f-03fd-4527-9e79-fcbbca111d73'
    },
    moduleVolumeOne : [
        {
            title:'Modulo 1',
            subtitle:'Conociendo las disciplinas que forman parte de la robótica',
            meses: [
                {
                    mes:'Septiembre',
                    objetos:[
                        {
                            texto:'Introducción general',
                            recursos:[{tipo:'Presentación', url:testURL}]
                        },
                        {
                            texto:'Introducción a la electricidad',
                            recursos:[{tipo:'Presentación',url:'/volumenes'}]
                        },
                        {
                            texto:'Introducción a la electrónica',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Introducción a la programación',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                },
                {
                    mes:'Octubre',
                    objetos:[
                        {
                            texto:'Componentes electrónicos 1',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Componentes electrónicos 2',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Plataforma Scratch para Arduino 1',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Plataforma Scratch para Arduino 2',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                },
                {
                    mes:'Noviembre',
                    objetos:[
                        {
                            texto:'Práctica 1 - LED',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 2 - LED',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 3 - LED',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 4 - LED',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                }
            ], 
        },
        {
            title:'Modulo 2',
            subtitle:'Descubrir y explorar más sobre Educatrónica',
            meses: [
                {
                    mes:'Diciembre',
                    objetos:[
                        {
                            texto:'Práctica 5 - LED',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 1 - Semáforo',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 6 - Zumbador',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 2 - Carro policía',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Enero',
                    objetos:[
                        {
                            texto:'Práctica 7 - Motor',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 3 - Helicóptero',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 8 - Servomotor',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 4 - Futbol',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Febrero',
                    objetos:[
                        {
                            texto:'Práctica 9 - Sensor de luz',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 5 - Alumbrado público',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 10 - Sensor de distancia',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 6 - Pluma de estacionamiento',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                }
            ], 
        },
        {
            title:'Modulo 3',
            subtitle:'Armando ideas',
            meses: [
                {
                    mes:'Marzo',
                    objetos:[
                        {
                            texto:'Práctica 11 – Sensor de lluvia',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 7 – puerta de mascota',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 12 – Sensor de temperatura',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 8 – Congelador',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Abril',
                    objetos:[
                        {
                            texto:'Competencia',
                            recursos:[{tipo:'Presentación',url:''}]
                        }
                    ]
                }
            ], 
        }
    ],
    moduleVolumeTwo : [
        {
            title:'Modulo 1',
            subtitle:'Conociendo la relación de las disciplinas que forman parte de la robótica',
            meses: [
                {
                    mes:'Septiembre',
                    objetos:[
                        {
                            texto:'Introducción general 1',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Introducción general 2',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Elementos de la robótica',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Componentes electrónicos 1',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                },
                {
                    mes:'Octubre',
                    objetos:[
                        {
                            texto:'Componentes electrónicos 2',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Plataforma Scratch para Arduino 1',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Plataforma Scratch para Arduino 2',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 1 - LED',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                },
                {
                    mes:'Noviembre',
                    objetos:[
                        {
                            texto:'Práctica 2 - Bocina',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 1 - Camión escolar',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 3 - RGB',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 2 - Plano',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                }
            ], 
        },
        {
            title:'Modulo 2',
            subtitle:'Descubrir y explorar más sobre Educatrónica',
            meses: [
                {
                    mes:'Diciembre',
                    objetos:[
                        {
                            texto:'Práctica 4 - Sensor touch',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 5 - Servomotor',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 3 - Aire acondicionado',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 6 - Potenciómetro',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Enero',
                    objetos:[
                        {
                            texto:'Práctica 7 - Servomotor',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 4 - Robot',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 8 - Joystick',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 5 - Beisbol',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Febrero',
                    objetos:[
                        {
                            texto:'Práctica 9 - Sensor infrarrojo',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 6 - Puerta de acceso',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 10 - Sensor de presencia',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 11 - Display de 7 segmentos',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                }
            ], 
        },
        {
            title:'Modulo 3',
            subtitle:'Armando ideas',
            meses: [
                {
                    mes:'Marzo',
                    objetos:[
                        {
                            texto:'Práctica 11 - Sensor de lluvia',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Proyecto 7 - puerta de mascota',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 12 - Sensor de temperatura',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto 8 - Congelador',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Abril',
                    objetos:[
                        {
                            texto:'Competencia',
                            recursos:[{tipo:'Presentación',url:''}]
                        }
                    ]
                }
            ], 
        }
    ],  
    moduleVolumeThree : [
        {
            title:'Modulo 1',
            subtitle:'Conociendo la relación de las disciplinas que forman parte de la robótica',
            meses: [
                {
                    mes:'Septiembre',
                    objetos:[
                        {
                            texto:'Introducción general',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Electricidad',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Electrónica',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Introducción a la programación escrita 1',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                },
                {
                    mes:'Octubre',
                    objetos:[
                        {
                            texto:'Introducción a la programación escrita 2',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Introducción a las variables y tipos de datos',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Introducción a los operadores',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Introducción a las estructuras de control',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                },
                {
                    mes:'Noviembre',
                    objetos:[
                        {
                            texto:'Introducción a las funciones',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Introducción a las librearías',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Tendencias de la robótica',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Componentes electrónicos 1',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                }
            ], 
        },
        {
            title:'Modulo 2',
            subtitle:'Descubrir y explorar más sobre Educatrónica',
            meses: [
                {
                    mes:'Diciembre',
                    objetos:[
                        {
                            texto:'Componentes electrónicos 2',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Plataforma Arduino IDE',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 1 – LED',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 2 – LED',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Enero',
                    objetos:[
                        {
                            texto:'Práctica 3 – LED',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 4 – LED',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 5 – LED',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 6 – Zumbador',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Febrero',
                    objetos:[
                        {
                            texto:'Práctica 7 – Servomotor',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 8 – Servomotor',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 9 – Motor',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 10 – Sensor de luz',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                }
            ], 
        },
        {
            title:'Modulo 3',
            subtitle:'Armando ideas',
            meses: [
                {
                    mes:'Marzo',
                    objetos:[
                        {
                            texto:'Práctica 11 – Sensor de distancia',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Práctica 12 – Sensor de lluvia',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 13 – Potenciómetro',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 14 – Servomotor',
                            recursos:[{tipo:'Presentación',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Abril',
                    objetos:[
                        {
                            texto:'Práctica 15 – Sensor de presencia',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 16 – Motorreductor',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Práctica 17 – Motorreductor',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                        {
                            texto:'Proyecto carro seguidor de línea',
                            recursos:[{tipo:'Presentación',url:''}]
                        },
                    ]
                },
                {
                    mes:'Mayo',
                    objetos:[
                        {
                            texto:'Competencia',
                            recursos:[{tipo:'Presentación',url:''}]
                        }
                    ]
                }
            ], 
        }
    ]
});

export default myContext;