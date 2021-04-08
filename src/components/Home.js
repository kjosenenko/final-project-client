import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Greenit</h1>
                <p>Here you might find some useful information. But since this is the internet you will mostly just find a bunch of opinions noone cares about and plenty of useless information.</p>
                <Link className="btn btn-success" to="/new">Start Posting!</Link>
                <br /><br />
                <Link className="btn btn-success" to="/posts">View Threads</Link>
            </div>
        )
    }
}

export default Home
