const initialState = {
    replies: [],
    post: {},
    loading: true
}

const threadReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_POSTS_THREAD":
            return {
                ...state,
                loading: false,
                post: action.thread,
                replies: action.thread.replies
            }
        default:
            return state
    }
}

export default threadReducer