import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-link"><Link className="btn btn-dark" to="/">Home</Link></li>
                    <li className="nav-link"><Link className="btn btn-dark" to="/posts">All Posts</Link></li>
                    <li className="nav-link"><Link className="btn btn-dark" to="/posts/new">New Post</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav