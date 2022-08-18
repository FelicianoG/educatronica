import { createContext } from "react";

const test = 'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/HM-E1-P1-Sema%CC%81foro.pdf?alt=media&token=94360022-14df-459a-8c7e-0cffe6b8194e'

const myContext = createContext({
    semaforoPDFURL:test,
    volumeOneURLS:{
        kit:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FEsp.%20basicas%20kit%20Educatronica%201%2022.pdf?alt=media&token=f6f9d9c5-4827-46e1-86d4-8a41139693f9',
        evaluacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FEvaluacio%CC%81n%20diagnostica%20Educatronica%201.pdf?alt=media&token=493537b4-24a1-4823-98fc-6cf0d5b9ea5a',
        instalacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FGuia%20instalacion%20y%20configuracion%20Educatronica%201%20y%202.pdf?alt=media&token=a1b8ea9a-c9ce-4cff-a947-a25ed13fff46'
    },
    volumeTwoURLS:{
        kit:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FEsp.%20basicas%20kit%20Educatronica%201%2022.pdf?alt=media&token=f6f9d9c5-4827-46e1-86d4-8a41139693f9',
        evaluacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FEvaluacio%CC%81n%20diagnostica%20Educatronica%201.pdf?alt=media&token=493537b4-24a1-4823-98fc-6cf0d5b9ea5a',
        instalacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FGuia%20instalacion%20y%20configuracion%20Educatronica%201%20y%202.pdf?alt=media&token=a1b8ea9a-c9ce-4cff-a947-a25ed13fff46'
    },
    volumeThreeURLS:{
        kit:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FEsp.%20basicas%20kit%20Educatronica%201%2022.pdf?alt=media&token=f6f9d9c5-4827-46e1-86d4-8a41139693f9',
        evaluacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FEvaluacio%CC%81n%20diagnostica%20Educatronica%201.pdf?alt=media&token=493537b4-24a1-4823-98fc-6cf0d5b9ea5a',
        instalacion:'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/Educatronica%20Volumen%201%2FGuia%20instalacion%20y%20configuracion%20Educatronica%201%20y%202.pdf?alt=media&token=a1b8ea9a-c9ce-4cff-a947-a25ed13fff46'
    }
});

export default myContext;