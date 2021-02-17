import React from 'react'
import { Buscador } from '../Components/Buscador'


export const Navbar = () => {
    return (
        <>
                <nav className="bg-red-400">
                    <div>
                        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
                        alt="logo" 
                        width="150px" 
                        height="150px"
                        />
                    </div>
                    
                </nav>
                <Buscador/>
        </>
    )

}
