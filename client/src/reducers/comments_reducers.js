import { FETCH_POST_COMMENTS } from '../actions/comment_actions';

const comments = (state ={}, action) => {
    switch(action.type) {
        case FETCH_POST_COMMENTS:
            return Object.assign({}, state, { comments: action.comments})
        default:
            return state
    }
}
export default comments;