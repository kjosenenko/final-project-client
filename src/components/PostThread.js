import React, { Component } from 'react'
import {getPostThread} from '../actions/postThread'
import {connect} from 'react-redux'
import Reply from './Reply'

class PostThread extends Component {
    componentDidMount() {
        this.props.getPostThread(this.props.paramsId)
      }

    render() {
        const post = this.props.post
        const replies = post.replies.map((reply, i) => <Reply key={i} author={reply.author} reply={reply.reply}/>)
        // debugger
        return (
            <div>
                <h3 className="card-title">{post.subject}</h3>
                <small className="card-text">by: {post.author}</small>
                <p className="card-text">{post.post}</p>
                <div className="subContainer">
                    {replies}
                    {/* <h5>Post a reply</h5>
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
                    </form> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {
        post: state.thread.post,
        replies: state.thread.post.replies
    }
}

export default connect(mapStateToProps, {getPostThread})(PostThread)
// .map((reply, i) => <Reply key={i} author={reply.author} reply={reply.reply}/>)