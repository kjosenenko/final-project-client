import React, { Component } from 'react'
import {connect} from 'react-redux'
import Reply from './Reply'

class PostThread extends Component {
    render() {
        const post = this.props.post
        let replies = this.props.replies
        if(replies) {
            replies = this.props.replies.map((reply, i) => <Reply key={i} author={reply.author} reply={reply.reply}/>)
            return (
                <div>
                    <h3 className="card-title">{post.subject}</h3>
                    <small className="card-text">by: {post.author}</small>
                    <p className="card-text">{post.post}</p>
                    <div className="subContainer">
                        {replies}
                        <h5>Post a reply</h5>
                        <form>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label>Author</label><br/>
                                    <input/>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="mb-3">
                                <label>Post</label><br/>
                                <textarea></textarea>
                            </div>
                            <button className="btn btn-dark">Post Reply</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        post: state.thread.post,
        replies: state.thread.post.replies
    }
}

export default connect(mapStateToProps)(PostThread)
