import React from 'react';

import Home from './pages/home';
import Campuses from './pages/campuses';
import StarWarsPeople from './pages/star-wars-people';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/campuses' component={Campuses} />
        <Route exact path='/star-wars-people' component={StarWarsPeople} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
