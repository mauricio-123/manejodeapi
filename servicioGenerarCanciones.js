import {generarToken} from './ServicioGenerarToken.js'

//llamar ala funcion generar token 
let tokenRespuesta = await generarToken()
let token= `${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`
//uri del servicio
const uri="https://api.spotify.com/v1/artists/49bzE5vRBRIota4qeHtQM8/top-tracks?market=us"
//configuro la peticion 
const peticion={
    method:"GET",
    headers:
    {Authorization:token}
     }

//consumo el servicio
 export async function obtenerCanconciones(){
    let respuesta=await fetch(uri,peticion)
    return respuesta.json()
}