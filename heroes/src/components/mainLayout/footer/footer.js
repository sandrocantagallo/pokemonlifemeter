import React from "react";
export default class Footer extends React.Component{ 
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
         <div class="row box-pokemon-panchina" style = {{height:"5vh"}}> 
            <div class="col-lg-1"></div>
            <div class="col-lg-2">{hp_pk_1}</div>
            <div class="col-lg-2">{hp_pk_2}</div>
            <div class="col-lg-2">{hp_pk_3}</div>
            <div class="col-lg-2">{hp_pk_4}</div>
            <div class="col-lg-2">{hp_pk_5}</div>
            <div class="col-lg-1"></div>
         </div>
      ); 
   }
}