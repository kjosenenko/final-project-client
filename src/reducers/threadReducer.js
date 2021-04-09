const initialState = {
    replies: [],
    post: {}
}

const threadReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_POSTS_THREAD":
            return {
                ...state,
                post: action.thread,
                replies: action.thread.replies
            }
        default:
            return state
    }
}

export default threadReducer