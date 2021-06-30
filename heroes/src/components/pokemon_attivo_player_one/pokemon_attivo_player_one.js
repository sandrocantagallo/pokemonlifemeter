import React from "react";
export default class PokemonAttivoPlayerOne extends React.Component{ 
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
         <div style = {{height:"90vh"}}>
            <div style = {{height:"45vh"}}>
            Pokemon attivo P1

            </div>
            <div style = {{height:"45vh"}}>
            Pokemon attivo P2

            </div>
         
         </div>
      ); 
   } 
}