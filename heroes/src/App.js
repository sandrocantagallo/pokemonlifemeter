import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
 
import MainTemplate from "./components/mainLayout/template/mainTemplate";
import PokemonAttivoPlayerOne from "./components/pokemon_attivo_player_one/pokemon_attivo_player_one";
import PokemonAttivoPlayerTwo from "./components/pokemon_attivo_player_two/pokemon_attivo_player_two";

 
class App extends Component {
 
   constructor(props){
      super(props);
   }
 
   render() {
 
      return (
         <BrowserRouter>
            <MainTemplate>
               <Switch>
                   <Route exact path='/' component={PokemonAttivoPlayerOne}/>
               </Switch>
            </MainTemplate>
         </BrowserRouter>
      );
   }
}
 
export default App;