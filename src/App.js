//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import NotFound from './NotFound';
import Navbar from './Navbar';
import SignUp from './SignUp';
import SingleMovie from './SingleMovie';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Home';

import FavoriteMovies from './FavoriteMovies';
import { LangContext } from './Context/LangContext';
import { useState } from 'react';







function App() {
  const [contextLang, setContextLang] = useState("EN")

  return (
    <div className="App">
      <LangContext.Provider value={{contextLang, setContextLang}}> 
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup"} component={SignUp} />
          <Route exact path={"/singlemovie/:id"} component={SingleMovie} />
          <Route exact path={"/favourites"} component={FavoriteMovies} />
          <Route exact path={"*"} component={NotFound} />
        </Switch>
      </BrowserRouter>
      </LangContext.Provider>


      
    </div>
  );
}

export default App;
