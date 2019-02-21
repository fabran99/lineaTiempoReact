import React, { Component } from 'react';
import Elemento from './Elemento';
import FormAdd from './FormAdd';
import Puntos from './Puntos';
import Detalle from './Detalle';
import SaveState from './SaveState';

class LineaTiempo extends Component{
    constructor(props){
        super(props);
        this.state={
            
        "elementos":[]
            
        };
        this.delElemento=this.delElemento.bind(this);
        this.addElemento=this.addElemento.bind(this);
        this.loadState=this.loadState.bind(this);
    }

    delElemento(index){
        if(window.confirm("Seguro que quieres eliminar este elemento?")){
            this.setState({
                elementos: this.state.elementos.filter((e,i) => {
                    return i!==index
                })
            })
        }
    }

    addElemento(elemento){
        this.setState({
            elementos: [...this.state.elementos, elemento]
        })
    }

    loadState(estado, inicial, final){
        
        this.setState(
            estado
        );

        document.getElementById("inicial").value=inicial;
        document.getElementById("final").value=final;
        this.props.inicialCookie(inicial);
        this.props.finalCookie(final);

    }


    render(){
        var fechaInicial=this.props.inicio;
        var fechaFinal=this.props.final;
        var diferencia=fechaFinal-fechaInicial;

        const elementos=this.state.elementos.map((elemento, i) =>{
            if(this.state.elementos.length>0 && fechaInicial<=parseInt(elemento.fecha) && fechaFinal>=parseInt(elemento.fecha)){
                return(
                    <div className="ElementoCompleto" id={elemento.fecha+"-"+i}>
                        <Elemento left={((elemento.fecha-fechaInicial)*100)/diferencia} ondel={this.delElemento} id={i} nombre={elemento.nombre} imagen={elemento.imagen} fecha={elemento.fecha}/>
                        <Puntos left={((elemento.fecha-fechaInicial)*100)/diferencia} fecha={elemento.fecha} id={i}/>
                    </div>
                )
            }
        });

        const detalles=this.state.elementos.map((elemento, i) => {
            if(this.state.elementos.length>0 && fechaInicial<=parseInt(elemento.fecha) && fechaFinal>=parseInt(elemento.fecha)){
                return(
                    <Detalle id={i} nombre={elemento.nombre} imagen={elemento.imagen} fecha={elemento.fecha} detalles={elemento.detalles} />
                )
            }
        }

        )

        
        return(
            <div className="espacioTrabajo">
                {detalles}
                <FormAdd inicial={this.props.inicio} final={this.props.final} onAdd={this.addElemento}/>
                <SaveState state={this.state} load={this.loadState} inicial={this.props.inicio} final={this.props.final}/>
                <span>{fechaInicial}</span>
                <div className="lineaTiempo">
                    {elementos}
                </div>
                <span>{fechaFinal}</span>
            </div>
        );
    }
}
export default LineaTiempo;