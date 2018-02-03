import { combineReducers } from 'redux';
import posts from './posts_reducers';
import comments from './comments_reducers';


export default combineReducers({
	posts,
	comments
});