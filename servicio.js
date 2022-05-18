//pasos para consumir una api con js

//declarar la uri 
const uri="https://api.spotify.com/v1/artists/49bzE5vRBRIota4qeHtQM8/top-tracks?market=us"

const token=" Bearer BQCMhu9K8NR4Wn-d1l_cIfYIXUj_KrUHqgR7uEKXuoiJaMqFpSJE0CrBGbkBxg2Fz5MSlXgAn4IUO48CyIAiQU_wG8yawwoC_9OX-W_3OmSqt7CqnpHH9YyUIcfG7Iip1yTZgqFUUaOqbq1Y5Cwr8CUt10SC4AyhVNA"
//2) Declaro los parametros de la peticion(que voy hacer)
const peticion={
    method:"get",    
    headers:{Authorization:token}

}
//rutina para consumir api
//1.para donde voy 
const uripost="https://accounts.spotify.com/api/token"
//2.almaceno los datos que voy a enviar
let dato="client_id=705abf0e90cf4bd6833e3d9b4f0a5bd1"
let dato2="client_secret=1d6fe12d83a9430084e9dd0950dec75b"
let dato3="grant_type=client_credentials"
//3.configuro la peticion
const peticionpost={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato+"&" +dato2 +"&"+dato3
}
//4.voy al servidor a consumir el servidor
fetch(uripost,peticionpost)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
   console.log(respuesta)
   let token=respuesta.token_type+" "+respuesta.access_token
   console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)

})
//declaro el fech (voy al servidor )
/*fetch(uri,peticion)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)//esto es un objeto
    console.log(respuesta.tracks)
pintarcanciones(respuesta.tracks)
})
.catch(function(respuesta){
    console.log(respuesta)
})
//funcion para recorrer un arreglo
function pintarcanciones(canciones){

    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion) {
        console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //rutina para llenado
        let columna=document.createElement("div")
        columna.classList.add("col")

        let targeta=document.createElement("div")
        targeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=cancion.album.images[0].url

        
        let nombre=document.createElement("h3")
        nombre.classList.add("w-100")
        nombre.textContent=cancion.name


        //padres e hijo
        targeta.appendChild(foto)
        targeta.appendChild(nombre)
        targeta.appendChild(audio)
        columna.appendChild(targeta)
        fila.appendChild(columna)

        
    });
}*/