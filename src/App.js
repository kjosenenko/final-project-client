import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Form from './components/Form'
import Posts from './components/Posts'
import ErrorPage from './components/ErrorPage'

class  App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/new" component={Form}/>
            <Route component={ErrorPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
