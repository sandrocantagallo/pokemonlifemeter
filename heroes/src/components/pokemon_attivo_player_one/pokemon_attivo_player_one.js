import React from "react";
export default class PokemonAttivoPlayerOne extends React.Component{ 
   constructor(props){ 
      super(props); 
      this.player1_hp = {
         pk_0 : 0,
      }
      this.player2_hp = {
         pk_0 : 0,
      }
   }
   render(){ 
      return( 
         <div class="row" style = {{height:"60vh"}}>
            <div class="col-sm-12" style = {{height:"30vh"}}>

               <div class="card pika">
                  <span class="hp">{this.player2_hp.pk_0}</span>
               </div>

            </div>
            <div class="col-sm-12" style = {{height:"30vh"}}>

               <div class="card pika">
                  <span class="hp">{this.player1_hp.pk_0}</span>
               </div>

            </div>
         
         </div>
      ); 
   } 
}