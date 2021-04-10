export const getPostThread = (id) => {
    return dispatch => {
        fetch(`/posts/${id}`)
        .then(r => r.json())
        .then(thread=> dispatch({type:"SET_POSTS_THREAD", thread}))
    }
}

export const addReply = (reply) => {
    return dispatch => {
        fetch(`/posts/${reply.post_id}/replies`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({reply})
        })
        .then(r => r.json())
        .then(reply => {
            dispatch({type:"ADD_REPLY", reply})
        })
    }
}