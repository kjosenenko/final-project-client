import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Post extends Component {
    render() {
        const {author, post, subject, id} = this.props
        return (
            <div className="card">
                <h5 className="card-title">{subject}</h5>
                <small className="card-text">by: {author}</small>
                <p className="card-text">{post}</p>
                <Link className="btn btn-secondary" to={`/posts/${id}`}>{id}</Link>
            </div>
        )
    }
}

export default Post
