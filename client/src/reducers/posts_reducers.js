import { FETCH_ALL_POSTS, FETCH_A_POST } from '../actions/post_actions';

const posts = (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALL_POSTS:
            return Object.assign({}, state, { posts: action.posts})
        case FETCH_A_POST:
            return Object.assign({}, state, { post: action.post})
        default: 
            return state
    }
}

export default posts;