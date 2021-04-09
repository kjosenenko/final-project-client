import React, { Component } from 'react'
import {connect} from 'react-redux'
import Post from './Post'

class Posts extends Component {
    render() {
        const posts = this.props.posts.map((post, i) => <Post author={post.author} subject={post.subject} post={post.post} />)
        return (
            <div>
                {posts}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Posts)
