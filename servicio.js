//pasos para consumir una api con js

//declarar la uri 
const uri="https://api.spotify.com/v1/artists/632M26jlmnCrL8CqD5i7Kd/top-tracks?market=us"

const token=" Bearer BQDx4JCbkoY0iXmTu0M6tWB0eeAV98nXJA4S5YPVETlh7CMfUjAJk0IdYcyrCAkMhN6ChioNWFNDgIVDcUGqA4MRJt4aFpleWRkt7IAX9CMcV0ooGSmc4anXLYg1TbAL_gttTiTF2JDAMpxUwqFRWpFnlX7fQh8bNzE"
//2) Declaro los parametros de la peticion(que voy hacer)
const peticion={
    method:"get",    
    headers:{Authorization:token}

}
//declaro el fech (voy al servidor )
fetch(uri,peticion)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)//esto es un objeto
    console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
})
.catch(function(respuesta){
    console.log(respuesta)
})