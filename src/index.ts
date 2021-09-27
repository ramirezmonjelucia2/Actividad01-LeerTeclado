import {leerTeclado} from './util/entradaTeclado'
console.log("Hola mundo")

let main = async () => {
        const valor = await leerTeclado('Dime algo')
        console.log(`Me has dicho: ${valor}`)
} 
main();