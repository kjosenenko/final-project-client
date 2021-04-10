import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="white">
                <h1>Welcome to Greennit</h1>
                <p>Here you might find some useful information. But since this is the internet you will mostly just find a bunch of opinions noone cares about and plenty of useless information.</p>
                <Link className="btn btn-dark" to="/posts/new">Start Posting!</Link>
                <br /><br />
                <Link className="btn btn-dark" to="/posts">View Threads</Link>
            </div>
        )
    }
}

export default Home
