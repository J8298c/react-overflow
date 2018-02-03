export const GET_ALL_POSTS = 'GET_ALL_POSTS';



const headers =   {headers: { 'Authorization': 'whatever-you-want' }}

export function getAllPosts(posts) {
	return {
		type: GET_ALL_POSTS,
		posts
	}
}


export function fetch_all_posts(dispatch) {
	return dispatch => {
		fetch('http://localhost:3001/posts', headers)
			.then(response => response.json())
			.then(posts => dispatch(getAllPosts(posts)))
	}
}

