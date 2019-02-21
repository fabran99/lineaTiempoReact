import React, { Component } from 'react';

class Puntos extends Component{
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
    }
    toggle(){
        if(document.getElementById(this.props.id).style.display=="none"){
            document.getElementById(this.props.id).style.display="block";
        }
        else{
            document.getElementById(this.props.id).style.display="none";
        }
    }
    render(){
        var location= this.props.left + "%";
        const styleElemento={
            left: location
        };
        return(
            <div className="punto" style={styleElemento}>
                <i className="fas fa-circle" title={this.props.fecha} onClick={this.toggle}></i> 
            </div>
        );
    }
}
export default Puntos;