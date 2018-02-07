import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import root_reducer from './reducers/index';

export const history = createHistory();

const enhancers = [];

const middleWare = [
    thunk,
    routerMiddleware(history)
];

const composeEnhancers = compose(
    applyMiddleware(...middleWare),
        ...enhancers
);

const store = createStore(root_reducer, {}, composeEnhancers);

export default store;