import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Query from './components/pages/query';
import Help from './components/pages/help';
// import View from './jbrowse/jbrowse';
import CSV_Upload from './components/pages/csvuploader';
 import View from './jbrowse/jbrowse';

  
function NAV() {
  // User will provide the id prop as input in the View component.In href method after redirecting, the home page needs
  //to be reloaded again. this is making the app lag a lot. also the search and find functionality is somehow lost if 
  // i do span or href for some reason
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/jbrowse/jbrowse' render={(props) => <View {...props} id={`Phyca_17-21`} />} />
        <Route path='/csvupload' component={CSV_Upload} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/query' component={Query} />
        <Route path='/help' component={Help} />
        {/* <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
  );
}
  
export default NAV;
