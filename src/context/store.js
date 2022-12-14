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
        instalacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FGuia%20instalacion%20y%20configuracion%20Educatronica%201%20y%202.pdf?alt=media&token=a1b8ea9a-c9ce-4cff-a947-a25ed13fff46',
        nav:'/pfd/1'
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
            subtitle:'Conociendo las disciplinas que forman parte de la rob??tica',
            meses: [
                {
                    mes:'Septiembre',
                    objetos:[
                        {
                            texto:'Introducci??n general',
                            recursos:[{tipo:'Presentaci??n', url:testURL}]
                        },
                        {
                            texto:'Introducci??n a la electricidad',
                            recursos:[{tipo:'Presentaci??n',url:'/volumenes'}]
                        },
                        {
                            texto:'Introducci??n a la electr??nica',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Introducci??n a la programaci??n',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Octubre',
                    objetos:[
                        {
                            texto:'Componentes electr??nicos 1',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Componentes electr??nicos 2',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Plataforma Scratch para Arduino 1',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Plataforma Scratch para Arduino 2',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Noviembre',
                    objetos:[
                        {
                            texto:'Pr??ctica 1 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 2 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 3 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 4 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                }
            ], 
        },
        {
            title:'Modulo 2',
            subtitle:'Descubrir y explorar m??s sobre Educatr??nica',
            meses: [
                {
                    mes:'Diciembre',
                    objetos:[
                        {
                            texto:'Pr??ctica 5 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 1 - Sem??foro',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/qPNu5rBS-3o'},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Pr??ctica 6 - Zumbador',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 2 - Carro polic??a',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/1FueBFvBiRg'},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Enero',
                    objetos:[
                        {
                            texto:'Pr??ctica 7 - Motor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 3 - Helic??ptero',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/HbMDiSxQkxc'},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Pr??ctica 8 - Servomotor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 4 - Futbol',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/8JPgIUFn1Pk'},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Febrero',
                    objetos:[
                        {
                            texto:'Pr??ctica 9 - Sensor de luz',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 5 - Alumbrado p??blico',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/wjWO5hIb4oo'},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Pr??ctica 10 - Sensor de distancia',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 6 - Pluma de estacionamiento',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/ToxIu1NLAj4'},{tipo:'Hoja de medidas',url:''}]
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
                            texto:'Pr??ctica 11 - Sensor de lluvia',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 7 - puerta de mascota',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/HKLZDDgk330'},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Pr??ctica 12 - Sensor de temperatura',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 8 - Congelador',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/1MLorgTr9qo'},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Abril',
                    objetos:[
                        {
                            texto:'Competencia',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        }
                    ]
                }
            ], 
        }
    ],
    moduleVolumeTwo : [
        {
            title:'Modulo 1',
            subtitle:'Conociendo la relaci??n de las disciplinas que forman parte de la rob??tica',
            meses: [
                {
                    mes:'Septiembre',
                    objetos:[
                        {
                            texto:'Introducci??n general 1',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Introducci??n general 2',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Elementos de la rob??tica',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Componentes electr??nicos 1',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Octubre',
                    objetos:[
                        {
                            texto:'Componentes electr??nicos 2',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Plataforma Scratch para Arduino 1',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Plataforma Scratch para Arduino 2',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 1 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Noviembre',
                    objetos:[
                        {
                            texto:'Pr??ctica 2 - Bocina',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 1 - Cami??n escolar',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/jU6wmkU3x8U'},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Pr??ctica 3 - RGB',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 2 - Piano',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:'https://www.youtube.com/embed/DPvL-Rh65MQ'},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                }
            ], 
        },
        {
            title:'Modulo 2',
            subtitle:'Descubrir y explorar m??s sobre Educatr??nica',
            meses: [
                {
                    mes:'Diciembre',
                    objetos:[
                        {
                            texto:'Pr??ctica 4 - Sensor touch',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 5 - Servomotor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 3 - Aire acondicionado',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Pr??ctica 6 - Potenci??metro',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Enero',
                    objetos:[
                        {
                            texto:'Pr??ctica 7 - Servomotor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 4 - Robot',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Pr??ctica 8 - Joystick',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 5 - Beisbol',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Febrero',
                    objetos:[
                        {
                            texto:'Pr??ctica 9 - Sensor infrarrojo',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 6 - Puerta de acceso',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Pr??ctica 10 - Sensor de presencia',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 11 - Display de 7 segmentos',
                            recursos:[{tipo:'Presentaci??n',url:''}]
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
                            texto:'Pr??ctica 11 - Sensor de lluvia',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                        {
                            texto:'Proyecto 7 - puerta de mascota',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 12 - Sensor de temperatura',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto 8 - Congelador',
                            recursos:[{tipo:'Presentaci??n',url:''},{tipo:'Videotutorial del armado',url:''},{tipo:'Hoja de medidas',url:''}]
                        },
                    ]
                },
                {
                    mes:'Abril',
                    objetos:[
                        {
                            texto:'Competencia',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        }
                    ]
                }
            ], 
        }
    ],  
    moduleVolumeThree : [
        {
            title:'Modulo 1',
            subtitle:'Conociendo la relaci??n de las disciplinas que forman parte de la rob??tica',
            meses: [
                {
                    mes:'Septiembre',
                    objetos:[
                        {
                            texto:'Introducci??n general',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Electricidad',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Electr??nica',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Introducci??n a la programaci??n escrita 1',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Octubre',
                    objetos:[
                        {
                            texto:'Introducci??n a la programaci??n escrita 2',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Introducci??n a las variables y tipos de datos',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Introducci??n a los operadores',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Introducci??n a las estructuras de control',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Noviembre',
                    objetos:[
                        {
                            texto:'Introducci??n a las funciones',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Introducci??n a las librer??as',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Tendencias de la rob??tica',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Componentes electr??nicos 1',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                }
            ], 
        },
        {
            title:'Modulo 2',
            subtitle:'Descubrir y explorar m??s sobre Educatr??nica',
            meses: [
                {
                    mes:'Diciembre',
                    objetos:[
                        {
                            texto:'Componentes electr??nicos 2',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Plataforma Arduino IDE',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 1 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 2 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Enero',
                    objetos:[
                        {
                            texto:'Pr??ctica 3 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 4 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 5 - LED',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 6 - Zumbador',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Febrero',
                    objetos:[
                        {
                            texto:'Pr??ctica 7 - Servomotor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 8 - Servomotor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 9 - Motor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 10 - Sensor de luz',
                            recursos:[{tipo:'Presentaci??n',url:''}]
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
                            texto:'Pr??ctica 11 - Sensor de distancia',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 12 - Sensor de lluvia',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 13 - Potenci??metro',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 14 - Servomotor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Abril',
                    objetos:[
                        {
                            texto:'Pr??ctica 15 - Sensor de presencia',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 16 - Motorreductor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Pr??ctica 17 - Motorreductor',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                        {
                            texto:'Proyecto carro seguidor de l??nea',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        },
                    ]
                },
                {
                    mes:'Mayo',
                    objetos:[
                        {
                            texto:'Competencia',
                            recursos:[{tipo:'Presentaci??n',url:''}]
                        }
                    ]
                }
            ], 
        }
    ]
});


export default myContext;