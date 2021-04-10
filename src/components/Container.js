import React, { Component } from 'react' 
import {getPostThread} from '../actions/postThread'
import {connect} from 'react-redux'
import PostThread from './PostThread'

class Container extends Component {

    render() {
        this.props.getPostThread(this.props.paramsId)
        
        return (
            <PostThread />
        )
    }
}

export default connect(null, {getPostThread})(Container)
