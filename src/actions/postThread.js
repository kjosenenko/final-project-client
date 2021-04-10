export const getPostThread = (id) => {
    return dispatch => {
        dispatch({type: "LOADING"})
        fetch(`/posts/${id}`)
        .then(r => r.json())
        .then(thread=> dispatch({type:"SET_POSTS_THREAD", thread}))
    }
}