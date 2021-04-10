import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Post extends Component {
    render() {
        const {author, post, subject, id} = this.props
        return (
            <div className="card dark-background">
                <h5 className="card-title green">{subject}</h5>
                <small className="card-text grey">by: {author}</small>
                <p className="card-text white">{post}</p>
                <Link className="btn btn-secondary" to={`/posts/${id}`}>View this thread</Link>
            </div>
        )
    }
}

export default Post
