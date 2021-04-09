import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <form>
                <div className="mb-3 row">
                    <div className="col">
                        <label>Subject</label><br/>
                        <input/>
                    </div>
                    <div className="col">
                        <label>Author</label><br/>
                        <input/>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Post</label><br/>
                    <textarea></textarea>
                </div>
                <button className="btn btn-dark">Publish Post</button>
            </form>
        )
    }
}

export default Form
