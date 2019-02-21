import React, { Component } from 'react';

class Elemento extends Component{
    constructor(props){
        super(props);
        this.handleDel=this.handleDel.bind(this);
        this.front=this.front.bind(this);
        this.toggle=this.toggle.bind(this);
        this.expandir=this.expandir.bind(this);
    }
    handleDel(){
        this.props.ondel(this.props.id);
    }
    toggle(){
        if(document.getElementById(this.props.id).style.display=="none"){
            document.getElementById(this.props.id).style.display="block";
        }
        else{
            document.getElementById(this.props.id).style.display="none";
        }
    }
    front(){
        var elementos= document.querySelectorAll(".contenedorElemento");
        for(let i=0; i < elementos.length; i++){
            elementos[i].style.zIndex=1;
        }
        document.getElementById(`elemento${this.props.id}`).style.zIndex=4;
    }
    expandir(){
        var detalles=document.querySelectorAll(".detalle");
        for(var i=0; i<detalles.length; i++){
            detalles[i].style.display="none";
        }
        document.getElementById(`detalle${this.props.id}`).style.display="block";
    }
    render(){

       
        var location=this.props.left + "%";
        const styleElemento={
            left: location
        };
        const styleContenido={
            display: "none"
        };
        var idElemento=`elemento${this.props.id}`;
        return(
            <div className="contenedorElemento" style={styleElemento} id={idElemento}>
                <div className="elemento">
                    <div className="contenido" id={this.props.id} style={styleContenido} onClick={this.front}>
                        <i className="fas fa-window-close" onClick={this.toggle}></i>
                        <h6>{this.props.nombre}</h6>
                        <div className="img">
                            <img src={this.props.imagen} title={this.props.nombre} alt={this.props.nombre}/>
                        </div>
                        <span className="fechaElemento">{this.props.fecha}</span>
                        <button onClick={this.expandir}>Ver detalle</button>
                        <button onClick={this.handleDel}>Eliminar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Elemento;