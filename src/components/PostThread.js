import React, { Component } from 'react'
import {connect} from 'react-redux'
import Reply from './Reply'
import {getPostThread, addReply} from '../actions/postThread'

class PostThread extends Component {
    state = {
        author: "",
        reply: "",
        post_id: this.props.paramsId
    }

    componentDidMount() {
        this.props.getPostThread(this.props.paramsId)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        this.props.addReply(this.state)
    }

    render() {
        const post = this.props.post
        let replies = this.props.replies
        if(replies) {
            replies = this.props.replies.map((reply) => <Reply key={reply.id} author={reply.author} reply={reply.reply}/>)
            return (
                <div>
                    <h3 className="card-title white">{post.subject}</h3>
                    <small className="card-text">by: {post.author}</small>
                    <p className="card-text white">{post.post}</p>
                    <div className="subContainer">
                        {replies}
                        <h5>Post a reply</h5>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label>Author</label><br/>
                                    <input type="text" id="author" name="author" value={this.state.author} onChange={this.handleChange}/>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="mb-3">
                                <label>Reply</label><br/>
                                <textarea id="reply" name="reply" value={this.state.reply} onChange={this.handleChange}></textarea>
                            </div>
                            <button className="btn btn-dark">Post Reply</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="spinner-border text-light" role="status">
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

export default connect(mapStateToProps, {getPostThread, addReply})(PostThread)
