import React, { Component } from 'react';
import '../App.css';

class Pokedex extends Component {
    render() {
      return (
        <div className="detallePokemon">
            {console.log(this.props)}
          <div className="imagen"><img src={this.props.pokemon.sprites.front_default} onClick={this.props.onclick} alt="" /></div>
          <div className="nombre">{this.props.pokemon.name}</div>
          <div className="alturaPeso">Altura={this.props.pokemon.height} Peso={this.props.pokemon.weight}</div>
          <div className="tipos">Altura={this.props.pokemon.types[0].type.name} Peso={this.props.pokemon.types[1].type.name}</div>
          <div className="ataques">
            {this.props.pokemon.moves[0].move.name}&nbsp;
            {this.props.pokemon.moves[1].move.name}&nbsp;
            {this.props.pokemon.moves[2].move.name}&nbsp;
            {this.props.pokemon.moves[3].move.name}
          </div>
        </div>
      );
    }
  }

  module.exports = Pokedex;