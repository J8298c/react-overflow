export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const POST_VOTING = 'POST_VOTING';
export const FETCH_A_POST = 'FETCH_A_POST';

export function getAllPosts(posts) {
    return {
        type: GET_ALL_POSTS,
        posts
    }
}

export function fetchAPost(post) {
    return {
        type: FETCH_A_POST,
        post
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

export function fetchingAPost(id, dispatch) {
    return dispatch => {
        fetch(`http://localhost:3001/posts/${id}`, headers)
        .then(response => response.json())
        .then(post => {
            dispatch(fetchAPost(post))
        })
    }
}

export function postVoting(id, option, dispatch) {
    return dispatch => {
        let vote = `${option}`
        fetch(`http://localhost:3001/posts/${id}`, {
        headers: {
               'Authorization': 'whatever-you-want',
               'Accept': 'application/json',
               "Content-Type": "application/json",
           },
           method: 'Post',
           body: JSON.stringify({option: vote})
      })
      .then(response => response.json())
      .then(posts => {
          console.log(posts);
          dispatch(fetchAllPosts())
      })
    }
}