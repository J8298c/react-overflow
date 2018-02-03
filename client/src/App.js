import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RouterComponent from './components/RouterComponent';
import rootReducers from './reducers/index';

const store = createStore(rootReducers, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
