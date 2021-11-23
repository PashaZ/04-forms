import { Component } from 'react';
// import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
    status: Status.IDLE,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      console.log(555)
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevProps.pokemonName;
  //   const nextName = this.props.pokemonName;

  //   if (prevName !== nextName) {
  //     this.setState({ status: Status.PENDING });
  //     setTimeout(() => {
  //       pokemonAPI
  //         .fetchPokemon(nextName)
  //         .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
  //         .catch(error => this.setState({ error, status: Status.REJECTED }));
  //     }, 3000);
  //   }
  // }


  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Введите имя покемона.</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        // <PokemonDataView pokemon={pokemon} />;
        <div>
          {!this.props.pokemonName && <p>Введіть імя покемона</p>}
          <p>{this.state.pokemon && <div>{this.state.pokemon.name}</div>}</p>
        </div>
      )
    }
  }
}
