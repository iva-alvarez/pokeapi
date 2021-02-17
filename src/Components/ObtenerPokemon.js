import React from 'react'
import { PokeCard } from './PokeCard';

export const ObtenerPokemon = (props) => {

    const { pokemon } = props;
    return (
        
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {pokemon.map(( poke,id ) => {
                    return (
                        <PokeCard
                          poke={poke}
                          key={id}
                        />
                    ) 
                        
                    
                    })
                }
            </div>
        
    )
}
