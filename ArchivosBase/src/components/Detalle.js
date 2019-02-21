import React, { Component } from 'react';
import Elemento from './Elemento';

class Detalle extends Component{
    constructor(props){
        super(props);
        this.close=this.close.bind(this);
    }
    close(){
        document.getElementById(`detalle${this.props.id}`).style.display="none";
    }
    render(){
        return(
            <div className="detalle" id={`detalle${this.props.id}`}>
                <i className="fas fa-window-close" onClick={this.close}></i>
                <h3>{this.props.nombre}</h3>
                <div className="contenedorImg">
                    <img src={this.props.imagen}/>
                </div>
                <h5>{this.props.fecha}</h5>
                <p data-simplebar data-simplebar-auto-hide="false">{this.props.detalles}</p>
            </div>
        );
    }
}

export default Detalle;