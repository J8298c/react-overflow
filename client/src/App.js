import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import store from './store';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={HomePage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
