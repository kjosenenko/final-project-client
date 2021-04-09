export const getPosts = () => {
    return dispatch => {
        fetch("/posts")
        .then(r => r.json())
        .then(posts => dispatch({type:"SET_POSTS", posts}))
    }
}