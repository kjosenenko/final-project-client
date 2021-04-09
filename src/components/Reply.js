import React, { Component } from 'react'

export class Reply extends Component {
    render() {
        const {author, reply}= this.props
        return (
            <div>
                <small>{author} says:</small>
                <p>{reply}</p>
            </div>
            // <div>Reply</div>
        )
    }
}

export default Reply