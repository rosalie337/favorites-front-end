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
import PrivateRoute from './PrivateRoute';

export default class App extends Component {

  state = { user: null }

  setUser = user => {
    this.setState({ user: user.body });
  }
  render() {
    return (
      <div className="App">
      <header>
        <h1>Search Your Favorite Rick And Morty Character</h1>
      </header>
      <BrowserRouter>
          <div className="nav">
            <a href to="/favorites">Favorites</a>
            <a href to="/">Search</a>
            <a href to="/login">Login</a>
          </div>
          <Switch>
            <PrivateRoute exact path="/" component={Search} user={this.state.user} />
            <PrivateRoute exact path="/favorites" component={Favorites} user={this.state.user} />
            <Route exact path="/login" render={(props) => <Login {...props} setUser={this.setUser} user={this.state.user} />} />
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}