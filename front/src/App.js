import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AllMovies from './components/pages/AllMovies';
import AddMovie from './components/pages/AddMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage}></Route>
          <Route onUpdate={window.scrollTo(0, 0)} path="/all" component={AllMovies}></Route>
          <Route onUpdate={window.scrollTo(0, 0)} path="/add" component={AddMovie}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
