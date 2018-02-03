import { GET_ALL_POSTS, FETCH_A_POST  } from '../actions/post_actions';

export default (state = {}, action) => {
	switch(action.type) {
		case GET_ALL_POSTS:
			const { posts } = action;
			return Object.assign({}, state, { posts: posts})
		case FETCH_A_POST:
			const { post } = action;
			return Object.assign({}, state, { post: post})
		default:
			return state
	}
}

