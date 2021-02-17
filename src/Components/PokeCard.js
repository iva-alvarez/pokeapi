
import React from 'react'

export const PokeCard = (props) => {

    const { poke } = props;
    
    return (
        
        
            
            <div className="max-w-sm max-h-56 mt-20 bg-white shadow-lg rounded-lg overflow-hidden">
                    
                    <div className="w-2/3 p-4">
                        
                        <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
                                       font-bold text-2xl capitalize">
                            {poke.name}
                        </h4>  
                    
                    </div>

                    
                    <div className="w-1/3  mt-6 mr-20 space-x-2">
                        
                        {poke.types.map( (type, id) => {
                            return (
                                    <p className="mt-2 ml-4 rounded-full bg-red-400 py-2 px-6
                                    text-sm text-white font-semibold inline capitalize"
                                    
                                      key={id}>
                                    
                                    {type.type.name}
                                    
                                    </p>
                                );    
                            })
                        }
                    
                    </div>
                    
                    <div className="w-1/3 ml-52 -mt-28 bg-cover">
                        
                        <img 
                        src={poke.sprites.other.dream_world.front_default} alt={poke.name}/>
                    
                    </div>
            
            </div>
        
        
    )
}
