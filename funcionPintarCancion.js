//funcion para recorrer un arreglo
 export function pintarcanciones(canciones){

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
}