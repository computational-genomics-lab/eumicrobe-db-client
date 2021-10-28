import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Query from './components/pages/query';
import Help from './components/pages/help';
import CSV_Upload from './components/pages/csvuploader';
 import View from './jbrowse/jbrowse';


const NAV = ({genomename}) => {
  return (
    <React.Fragment>
 <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path='/jbrowse/jbrowse' render ={(props) => <View {...props} id={genomename} />} />
        <Route path='/csvupload' component={CSV_Upload} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/query' component={Query} />
        <Route path='/help' component={Help} />
      
      </Switch>
    </Router>
    </React.Fragment>
  );
}
  
export default NAV;
