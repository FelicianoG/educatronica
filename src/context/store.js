import { createContext } from "react";

const test = 'https://firebasestorage.googleapis.com/v0/b/educatronica-son.appspot.com/o/HM-E1-P1-Sema%CC%81foro.pdf?alt=media&token=94360022-14df-459a-8c7e-0cffe6b8194e'

const myContext = createContext({
    
    bgColors : {
        one:'rgba(109,154,12,.2)',
        two:'rgba(245,135,10,.2)',
        three:'rgba(221,202 ,2,.2)'
    },
    semaforoPDFURL:test,
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
    }
});

export default myContext;