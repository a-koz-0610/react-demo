import React from 'react';

import Home from './pages/home';
import Campuses from './pages/campuses';
import StarWarsPeople from './pages/star-wars-people';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import style from './style.module.scss';

function App() {

  const PageSwitch = () => (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/campuses' component={Campuses} />
      <Route exact path='/star-wars-people' component={StarWarsPeople} />
    </Switch>
  )



  return (
    <BrowserRouter>
      <Nav />
      <div className={style.page}>
        <PageSwitch />
      </div>
    </BrowserRouter >
  );
}

export default App;
