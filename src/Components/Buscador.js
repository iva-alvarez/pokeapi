import React, { useState } from 'react'
import { searchPokemon } from './Api'
import swal from 'sweetalert'

export const Buscador = () => {

    
    const [ Buscar, setBuscar ] = useState('');
    const [pokemon, setpokemon] = useState();

    const OnChange = (e)  => {
        
        setBuscar(e.target.value);
        if (e.target.value >= 999 || e.target.value === "null" ){
            mostrarAlerta();
        }
        
       
    };

    

    const onClick =  async (e) => {
        const data = await searchPokemon(Buscar);
        (setpokemon(data));
       
    }

    const mostrarAlerta = () => {
        swal({
            title:"No se encontro un pokemon",
            text:"Prueba con otra busqueda",
            icon:"error",
            buttom:"ok",
            dangerMode:"true",
            timer:"3000"
        });
    }
  


    return (
        <>
                <div className=" flex flex-row flex-1 justify-center mt-20">

                    <div className="pl-6 pr-6 w-48 h-8">
                        <input 
                        className="text-center text-blue-700 text-base font-medium placeholder-blue-700 placeholder-opacity-70 
                        rounded-lg border-2 border-blue-400  shadow-xl 
                        focus:outline-none focus:border-blue-300
                        shadow-inner"
                        type="text"
                        placeholder="Busca un pokemon"
                        name="text"
                        autoComplete="off"
                        onChange={OnChange}
                        />
                    </div>

                    <div className=" ml-6 ">
                        <button
                            className=" w-24 h-8 text-white text-center font-medium rounded-lg 
                            bg-blue-400 hover:bg-blue-700 focus:outline-none  focus:ring-blue-300 focus:ring-opacity-50" 
                            onClick={onClick}> 
                            Buscar  
                        </button>
                    </div>

                    </div>
                            <div className="flex flex-row justify-center"> 
                                
                                { pokemon &&       
                                   
                                   <div className=" flex max-w-md mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
                                        
                                        <div className="w-2/3 p-4 ">
                                            
                                            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
                                            font-bold text-2xl capitalize ">
                                                {pokemon.name}
                                            </h3>
                                        
                                        </div>
                                        
                                        <div className=" w-1/3  mt-6 mr-20 space-x-4 ">
                                            {pokemon.types.map( (poke, id ) => {
                                                return (
                                                    <p key={ id } className="mt-2  p-4 rounded-full bg-red-400 py-2 px-6
                                                    text-sm text-white font-semibold inline capitalize ">
                                                        {poke.type.name}
                                                    </p>
                                                );
                                             })}
                                        
                                        </div>
                                        
                                        <div className="w-1/3 bg-cover  ">     
                                            
                                            <img 
                                            className=""
                                            src={pokemon.sprites.other.dream_world.front_default} 
                                            alt={pokemon.name}/> 
                                        
                                        </div>
                                            
                                    
                                     </div>
                                    
                                }
                            
                            </div>
                
        </>
    )

}
