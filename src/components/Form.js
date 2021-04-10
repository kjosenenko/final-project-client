import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPost} from '../actions/post'

class Form extends Component {
    state = {
        subject: "",
        author: "",
        post: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addPost(this.state, this.props.history)
    }

    render() {
        return (
            <form className="white" onSubmit={this.handleSubmit}>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="subject">Subject</label><br/>
                        <input type="text" id="subject" name="subject" value={this.state.subject} onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <label htmlFor="author">Author</label><br/>
                        <input type="text" id="author" name="author" value={this.state.author} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="post">Post</label><br/>
                    <textarea id="post" name="post" value={this.state.post} onChange={this.handleChange}></textarea>
                </div>
                <button className="btn btn-dark">Publish Post</button>
            </form>
        )
    }
}

export default connect(null, {addPost})(Form)
