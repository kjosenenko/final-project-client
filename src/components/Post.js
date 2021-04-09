import React, { Component } from 'react'

class Post extends Component {
    render() {
        const {author, post, subject} = this.props
        return (
            <div className="card">
                <h5 className="card-title">{subject}</h5>
                <small className="card-text">by: {author}</small>
                <p className="card-text">{post}</p>
            </div>
        )
    }
}

export default Post
