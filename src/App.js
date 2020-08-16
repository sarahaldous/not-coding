import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home.js'
import Artwork from './Creativities/Artwork.js'
import Baking from './Creativities/Baking'
import Error from './Error'
import Menu from './Menu'

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/artwork" component={Artwork} />
        <Route path="/baking" component={Baking} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
