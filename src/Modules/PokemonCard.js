import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    width: 50%;
    display: grid;
    grid-gap: 2%;
    grid-template-columns: 110% 100% 10%;
    background-color: #DCDCDC;
    margin: 10px;
    `;

const Img = styled.img`
`;

const Stats = styled.div``;




class PokemonCard extends React.Component {
    render() {

        const { pokemonList } = this.props

        return (
            <Card>
                <Img alt="N/A" src={pokemonList.imageUrl} />
                <Stats>
                    <h1>{pokemonList.name}</h1>
                    <h2>{pokemonList.hp}</h2>
                </Stats>
            </Card>
        )
    }
}

export default PokemonCard;