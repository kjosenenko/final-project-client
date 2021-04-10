import React, { Component } from 'react'

export class Reply extends Component {
    render() {
        const {author, reply}= this.props
        return (
            <div>
                <small>{author} says:</small>
                <p className="white">{reply}</p>
            </div>
        )
    }
}

export default Reply