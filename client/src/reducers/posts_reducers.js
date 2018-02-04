import { GET_ALL_POSTS, FETCH_A_POST, FETCH_CATEGORIES, IS_LOADING  } from '../actions/post_actions';

export default (state = {}, action) => {
	switch(action.type) {
		case GET_ALL_POSTS:
			const { posts } = action;
			return Object.assign({}, state, { posts: posts})
		case FETCH_A_POST:
			const { post } = action;
			return Object.assign({}, state, { post: post})
		case FETCH_CATEGORIES:
			const { categories } = action;
			console.log(categories);
			return Object.assign({}, state, { categories })
		case IS_LOADING:
			return Object.assign({}, state, {loading: action.boolean})
		default:
			return state
	}
}

