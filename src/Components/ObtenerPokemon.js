import React, { useState }  from 'react'
import { Footer } from '../ui/Footer';
import { PokeCard } from './PokeCard';

export const ObtenerPokemon = (props) => {

    const { pokemon } = props;
    const [ loading, setloading ] = useState(true);
     
    setTimeout(() => {
        setloading( false )
    }, 3000);
    
    return (  
            
        <>

          {  

            loading ? 
                
                <div className="flex justify-center bg-yellow-500 bg-opacity-50 mt-52 h-11 "> 
                    <p className="font-semibold text-xl text-red-700 mt-2.5 ">  Cargando pokemones...</p>
                </div>
            
            
            :
               <> 
                    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                {pokemon.map(( poke,id ) => {
                                        return (
                                            <PokeCard
                                            poke={poke}
                                            key={id}
                                            />
                                            ); 
                                        })
                                }
                    </div>
                    <Footer/>
             </>
        }

        
        </>
    )
}
