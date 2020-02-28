import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './App.css';
import Search from './Search';
import Login from '/Login';
import Favorites from './Favorites';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/search" component={Search} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/login" component={Login} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;