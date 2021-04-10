export const getPosts = () => {
    return dispatch => {
        fetch("/posts")
        .then(r => r.json())
        .then(posts => dispatch({type:"SET_POSTS", posts}))
    }
}

export const addPost = (post, history) => {
    return dispatch => {
        fetch("/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({post})
        })
        .then(r => r.json())
        .then(post => {
            dispatch({type:"ADD_POST", post})
            history.push("/posts")
        })
    }
}