import { combineReducers } from 'redux';
import post from './post_reducer';
import comment from './comment_reducers';

export default combineReducers({
    post,
    comment
});
