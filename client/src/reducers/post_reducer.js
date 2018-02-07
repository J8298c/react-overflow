import { GET_ALL_POSTS } from "../actions/post_actions";

const posts = (state = {}, action) => {
    switch(action.type) {
        case GET_ALL_POSTS:
            console.log(action.posts);
        default:
            return state
    }
}

export default posts;