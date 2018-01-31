const headers =  {headers: { 'Authorization': 'whatever-you-want' }};

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';

export function fetchAllPosts(posts) {
    return {
        type: FETCH_ALL_POSTS,
        posts
    }
}

export function fetching_all_posts(dispatch) {
    return dispatch => {
        fetch('http://localhost:3001/posts', headers)
        .then(response => response.json())
        .then(posts => {
            dispatch(fetchAllPosts(posts))
        }).catch(error => console.log(error))
    }
}