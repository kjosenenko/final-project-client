import React, { Component } from 'react'
import {connect} from 'react-redux'
import Post from './Post'

class Posts extends Component {
    render() {
        const posts = this.props.posts.map((post) => <Post key={post.id} author={post.author} subject={post.subject} post={post.post} id={post.id}/>)
        return (
            <div>
                <h1 className="white">Posts</h1>
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
