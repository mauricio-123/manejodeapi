//rutina para consumir api
//1.para donde voy 
const uri="https://accounts.spotify.com/api/token"
//2.almaceno los datos que voy a enviar
let dato="client_id=705abf0e90cf4bd6833e3d9b4f0a5bd1"
let dato2="client_secret=1d6fe12d83a9430084e9dd0950dec75b"
let dato3="grant_type=client_credentials"
//3.configuro la peticion
const peticion={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato+"&" +dato2 +"&"+dato3
}
//4. consumir el servido
export async function generarToken(){
    let respuesta= await fetch(uri,peticion)
    return(respuesta.json())
}