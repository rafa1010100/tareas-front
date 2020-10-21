import axios from 'axios'

export const SHOW_TAREAS = 'SHOW_TAREAS'

export function showTareas() {
    
    //aca lo correcto es hacer un servicio que se encargue de hacer las peticiones a la api rest, 
    // pero x tiempo--->
    return(dispatch, getstate) => {
    axios.get('localhost:8001/listar')
        .then((response) => {
            console.log(response)
            dispatch( { type: SHOW_TAREAS, payload: response.data } )
        })
    }
    
    /* tareas estaticas para probar sin llamada http
    const tareas = [
        { id: 1, desc: 'tarea A' },
        { id: 2, desc: 'tarea B' }
    ]

    return {
        type: SHOW_TAREAS,
        payload:  tareas
    }
    */
}

 