import {obtenerCanconciones} from './servicioGenerarCanciones.js'

import {pintarcanciones} from'./funcionPintarCancion.js'

//llamar ala funcion generar token 
let canciones = await obtenerCanconciones()


//llamar la funcion pintar canciones 
pintarcanciones(canciones.tracks)



