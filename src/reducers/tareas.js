import { SHOW_TAREAS } from "../actions"

const initialState = {
    list: []
}

export function showTareas(state = initialState, action) {
    switch(action.type) {
        case SHOW_TAREAS:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state
    }
}