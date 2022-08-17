import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const semaforoPDFRef = ref(storage , 'gs://educatronica-son.appspot.com/HM-E1-P1-Semáforo.pdf');
let semaforo
getDownloadURL(semaforoPDFRef).then( url => { semaforo = url} )

export { semaforo }