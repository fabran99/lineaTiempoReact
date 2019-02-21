import React, { Component } from 'react';

class FormAdd extends Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"",
            imagen:"",
            fecha: null,
            detalles:""
        };
        this.agregarElemento=this.agregarElemento.bind(this);
        this.updateState=this.updateState.bind(this);
    }

    agregarElemento(e){
        e.preventDefault();
        var error=false;
        if(this.state.nombre=="" || this.state.imagen=="" || this.state.fecha==null || this.state.detalles==""){
            error=true;
            window.alert("debes rellenar los campos")
        }
        if(!error){
            if(parseInt(this.state.fecha)>=parseInt(this.props.inicial) && parseInt(this.state.fecha)<=parseInt(this.props.final)){
                this.props.onAdd(this.state);
            }
            else{
               alert("La fecha debe estar dentro de los años de la linea");
            }
        }
    }
    updateState(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
    }

    

    render(){
        return(
            <div className="formAdd">
                <h1>Agrega elementos a la linea</h1>
                <form onSubmit={this.agregarElemento}>
                    <label>Nombre del suceso</label>
                    <input name="nombre" type="text" placeholder="Nombre del elemento" onChange={this.updateState}/>
                    <label>Imagen</label>
                    <input name="imagen" type="text" placeholder="Url imagen" onChange={this.updateState}/>
                    <label for="addFecha">Fecha</label>
                    <input placeholder="Fecha" min="1" name="fecha" type="number" id="addFecha" onChange={this.updateState}/>
                    <label for="textDetalles">Detalles del suceso</label>
                    <textarea name="detalles" placeholder="Detalles" id="textDetalles" onChange={this.updateState}/>
                    <button>Salvar cambios</button>
                </form>
            </div>
        );
    }
}

export default FormAdd;