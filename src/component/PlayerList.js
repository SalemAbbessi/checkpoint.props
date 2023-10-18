import React from 'react'
import players from './players.js'
import Player from './Player.js'

const PlayersList = () => {
    return (
      
        players.map((joueur, index) => (
         
            <Player
            joueur = {joueur}
            />
          
        ))
      
    )
  }
  
  export default PlayersList;
  
  
  
  
  
  
  