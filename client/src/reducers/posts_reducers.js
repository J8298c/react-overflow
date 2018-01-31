import { FETCH_ALL_POSTS } from '../actions/post_actions';

const postReducers = (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALL_POSTS:
            return Object.assign({}, state, { posts: action.posts})

        default: 
            return state
    }
}

export default postReducers;