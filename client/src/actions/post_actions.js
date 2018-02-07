export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export function getAllPosts(posts) {
    return {
        type: GET_ALL_POSTS,
        posts
    }
}


const headers = {headers: { 'Authorization': 'whatever-you-want' }};

export function fetchAllPosts(dispatch) {
    return dispatch => {
        fetch('http://localhost:3001/posts', headers)
            .then(response => response.json())
            .then(posts => dispatch(getAllPosts(posts)))
            .catch(error => console.log(error))
    }
}