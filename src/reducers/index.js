import { combineReducers } from 'redux';
import { showTareas } from './tareas';

const rootReducer = combineReducers({
  tarea: showTareas
});

export default rootReducer;
