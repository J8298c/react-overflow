import { GET_ALL_POSTS  } from '../actions/post_actions';

export default (state = {}, action) => {
	switch(action.type) {
		case GET_ALL_POSTS:
			const { posts } = action;
			console.log(posts);
			return Object.assign({}, state, { posts: posts})
		default:
			return state
	}
}

