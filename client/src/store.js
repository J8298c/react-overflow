import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();


const enhancers = [];

const middleWare = [
	thunk,
	routerMiddleware(history)
];

const composeEnhancers = compose(
	applyMiddleware(...middleWare),
	...enhancers
)

const store = createStore(() => {}, {}, composeEnhancers);

export default store;