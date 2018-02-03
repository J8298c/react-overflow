import { GET_ALL_POSTS  } from '../actions/post_actions';

export default (state = {}, action) => {
	switch(action.type) {
		case GET_ALL_POSTS:
			return Object.assign({}, state, { posts: action.posts})
		default:
			return state
	}
}

