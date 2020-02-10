import React, { Component } from 'react';
import '../App.css';

class PokemonEnLista extends Component{
    async componentDidMount(){
      const response = await fetch(this.props.pokemon);
      const json = await response.json();
      this.setState(json);
    }
    constructor(props){
      super(props);
      this.state = {sprites:[]}
      
    }
    onclick =()=>{
      this.props.onclick(this.state)
    }
    render(){
      return(
        <div className="pokeItem" key={Math.random()*9999999999999999999} onClick={this.onclick}>
            <span>{this.state.name}</span><img className="pokeFotoBusc" src={this.state.sprites.front_default} alt=""/>
        </div>
        
      );
    }
  }

  module.exports = PokemonEnLista;