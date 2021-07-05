import React from "react";
export default class Footer extends React.Component{ 
   constructor(props){ 
      super(props); 
      this.player1_hp = {
         pk_1 : 0,
         pk_2 : 0,
         pk_3 : 0,
         pk_4 : 0,
         pk_5 : 0
      }
   }
   render(){ 
      return( 
         <div class="row box-pokemon-panchina" style = {{height:"20vh"}}> 
            <div class="col-sm-1"></div>
            <div class="col-sm-2">
               <div class="card chari">
                     <span class="hp">{this.player1_hp.pk_1}</span>
               </div>
            </div>
            <div class="col-sm-2">
               <div class="card pika">
                     <span class="hp">{this.player1_hp.pk_2}</span>
               </div>
            </div>
            <div class="col-sm-2">
               <div class="card pika">
                     <span class="hp">{this.player1_hp.pk_3}</span>
               </div>
            </div>
            <div class="col-sm-2">
               <div class="card pika">
                     <span class="hp">{this.player1_hp.pk_4}</span>
               </div>
            </div>
            <div class="col-sm-2">
               <div class="card pika">
                     <span class="hp">{this.player1_hp.pk_5}</span>
               </div>
            </div>
            <div class="col-sm-1"></div>
         </div>
      ); 
   }
}