import React, { Component } from 'react';
import '../App.css';
import Pokedex from './Pokedex'
import Busqueda from './Busqueda'
import PokemonDetalles from './PokemonDetalles'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {mosttrarPokemon:true,pokemon:null}
    
  }
  onclick = (pokemon)=>{
    this.setState({mosttrarPokemon:!this.state.mosttrarPokemon,pokemon:pokemon})
    console.log(pokemon)
  }
  render() {
    return (
      <div>
        <Pokedex />
        {
        this.state.mosttrarPokemon ? <Busqueda onclick={this.onclick}/> : <PokemonDetalles onclick={this.onclick} pokemon={this.state.pokemon}/>

        }
      </div>
    );
  }
}


export default App;
