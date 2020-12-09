import React from 'react';

import HomeScreen from './pages/home-screen';
import CampusesScreen from './pages/campuses-screen';
import StarWarsPeopleScreen from './pages/star-wars-people-screen';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import style from './style.module.scss';

function App() {

  const PageSwitch = () => (
    <Switch>
      <Route exact path='/' component={HomeScreen} />
      <Route exact path='/campuses' component={CampusesScreen} />
      <Route exact path='/star-wars-people' component={StarWarsPeopleScreen} />
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
