import React, {Component} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Form from './components/Form'
import Posts from './components/Posts'
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'

class  App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <br /><br />
        <div id="container-div" className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/new" component={Form}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
        <br />
        <Footer />
      </Router>
    );
  }
  
}

export default App;
