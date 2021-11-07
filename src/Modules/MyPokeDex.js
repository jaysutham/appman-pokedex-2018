import React from 'react';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import myDexScroll from 'react-scrollbar'

const Scroll = styled(myDexScroll)`
    height: 100%;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;


    class myPokeDex extends React.Component {


      render() {

        const { pokemonList } = this.props

        this.props.pokemonList.map(poke => console.log(poke.name))
        return (
          <Scroll horizontal={false}>
           <Grid>
             {this.props.pokemonList ? this.props.pokemonList.map(eachPokemon => <PokemonCard pokemonList={eachPokemon} key={eachPokemon.id}/>) : "No pokemon added yet..." }
           </Grid>
        </Scroll>     
       )
      }
    }


export default myPokeDex;
