import React, { useEffect, useState } from 'react';
import { PokemonData, PokemonUrl } from './Components/Api';
import { ObtenerPokemon } from './Components/ObtenerPokemon';
import { Footer } from './ui/Footer';
import { Navbar } from './ui/Navbar';



const App = () => {

  const [pokemon, setpokemon] = useState([]);

  const TraerPokemon = async () => {
    
    try {
        const  data  = await PokemonData();
      //console.log(data.results)
      const promises = data.results.map( async ( poke ) => {
          return await PokemonUrl(poke.url)
      })
      const results = await Promise.all(promises)
      setpokemon(results);

    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() => {
    TraerPokemon();
  }, []);
  
  
  return (
   
      <div>
        <Navbar/>
        
        <ObtenerPokemon
        pokemon={ pokemon }
        />
        <Footer/>
      </div>
    
  )
}

export default App;