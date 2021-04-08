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
      <Router>
        <Nav />
        <br /><br />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/new" component={Form}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
