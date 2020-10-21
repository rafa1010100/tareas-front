import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux' //conectamos nuestro componente con el almacen de redux
import { showTareas } from '../actions'

class App extends Component {

  //la vamos a llamar cuando el componente se cargue
  componentWillMount() {
    this.props.showTareas()
  }

  renderTareasList() {
    return this.props.tareas.map((tarea) => {
      return (
        <li key={tarea.id}> {tarea.desc} </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Lista Tareas</h2>
        <ul>
          { this.renderTareasList() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tareas: state.tarea.list
  }
  
}

export default connect(mapStateToProps, {showTareas})(App)
