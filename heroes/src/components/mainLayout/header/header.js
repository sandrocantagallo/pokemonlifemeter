import React from "react";
export default class Header extends React.Component{ 
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
         <div class="bg-primary" style = {{height:"5vh"}}> sono Header. </div>
      ); 
   }
}