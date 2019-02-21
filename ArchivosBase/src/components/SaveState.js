import React, { Component } from 'react';

var arrayKey=[];

for(var i=0; i<window.localStorage.length; i++) {
    var key = window.localStorage.key(i);
    arrayKey.push(key);
};


class SaveState extends Component{
    constructor(props){
        super(props);
        this.state={
            arrayKey
        }
        this.saveCookie=this.saveCookie.bind(this);
        this.loadState=this.loadState.bind(this);
        this.deleteCookies=this.deleteCookies.bind(this);
    }
    saveCookie(e){
        e.preventDefault();
        this.setState({
            arrayKey: [...this.state.arrayKey, `${this.props.inicial}-${this.props.final}`]
        })
        localStorage.setItem(`${this.props.inicial}-${this.props.final}`,JSON.stringify(this.props.state));
    }
    
    deleteCookies(){
        this.setState({
            arrayKey:[]
        })
        window.localStorage.clear();
    }

    loadState(e,key){
        var elemento=(JSON.parse(window.localStorage[e.target.name]));

        var fechas= e.target.name.split("-");
        this.props.load(elemento, fechas[0], fechas[1]);
    }

    render(){
        

        const elementos = this.state.arrayKey.map((elemento, i) => {
            return(
            <div class="cookie" id={`cookie${i}`}>
                <h6>{elemento}</h6>
                <button onClick={this.loadState} name={elemento}>Cargar línea</button>
            </div>
            )
        });
        
  
        return(
            <div className="SaveState">
                <h4>Lineas guardadas</h4>
                {elementos}
                <div className="saveButtons">
                    <button onClick={this.saveCookie}>Guardar linea actual</button>
                    <button onClick={this.deleteCookies}>Borrar todas las lineas</button>
                </div>
            </div>
        );
    }
}
export default SaveState;