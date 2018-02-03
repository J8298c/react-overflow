const headers =  {headers: { 'Authorization': 'whatever-you-want' }};

export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';

export function fetchPostComments(comments){
    return {
        type: FETCH_POST_COMMENTS,
        comments
    }
}

export function fetching_post_comments(id, dispatch) {
    return dispatch => {
        fetch(`http://localhost:3001/posts/${id}/comments`, headers)
            .then(response => response.json())
            .then(comments => dispatch(fetchPostComments(comments)))
            .catch(error => console.log(error))
    }
}

