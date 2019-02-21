import React, { Component } from 'react';
import './App.css';
import LineaTiempo from './components/LineaTiempo';

class App extends Component {
  constructor(){
    super();
    this.state={
      inicial:null,
      final:null
    };
    this.inicialChange=this.inicialChange.bind(this);
    this.finalChange=this.finalChange.bind(this);
    this.inicialCookie=this.inicialCookie.bind(this);
    this.finalCookie=this.finalCookie.bind(this);
  }

  inicialChange(e){
    var inicialval=e.target.value;
    this.setState({
      inicial: inicialval
    });
  }
  finalChange(e){
    var finalval=e.target.value;
    this.setState({
      final: finalval
    });
  }

  inicialCookie(valor){
    this.setState({
      inicial: valor
    })
  }

  finalCookie(valor){
    this.setState({
      final: valor
    })
  }
  
  shouldComponentUpdate(newProps, newState) {
    if(parseInt(newState.final)<=parseInt(newState.inicial)){
      document.getElementById("indicacion").innerHTML="El año final debe ser mayor al inicial";
      return false;
    }
    else{
      document.getElementById("indicacion").innerHTML="";
      return true;
    }
  }
  
  render() {
    return (
      <div className="contenedorTiempo">
        <div className="fechasLinea">
          <h2>Seleccionar fechas de la linea</h2>
          <div>
            <label for="inicial">Año inicial</label>
            <input type="number" id="inicial" autoComplete="off" min="0" onChange={this.inicialChange}/>
          </div>
          <div>
            <label for="final">Año final</label>
            <input type="number" id="final"  autoComplete="off" min="0" onChange={this.finalChange}/>
          </div>
          <p id="indicacion">El año final debe ser mayor al inicial</p>
        </div>
        <LineaTiempo inicio={this.state.inicial} final={this.state.final} finalCookie={this.finalCookie} inicialCookie={this.inicialCookie}/>
      </div>
    );
  }
}

export default App;
