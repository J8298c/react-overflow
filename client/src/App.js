import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import store  from './store';
import HomePage from './components/HomePage';
import './App.css';
import PostHome from './components/PostHome';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/:category/:id' component={PostHome} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
