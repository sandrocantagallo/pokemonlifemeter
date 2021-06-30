import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
export default class MainTemplate extends React.Component{ 
   constructor(props){ 
      super(props); 
   }
   render(){ 
       return( 
          <div style = {{height:"100vh"}}> 
             <Header/> 
             {this.props.children} 
             <Footer/> 
         </div>
      ); 
   }
}