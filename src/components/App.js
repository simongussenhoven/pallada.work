import React from 'react';
import Main from './Main.js'
import Navigation from './Navigation'
import FadeIn from 'react-fade-in';
import Research from './Research'
import Contact from './Contact'
import Redev from './Redev'
import Advice from './Advice'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function App() {
  return (
    
      
        <Router>
          <FadeIn>
          <Navigation/>
          <Route exact path="/" component={Main}/>
          <Route path="/onderzoek" component={Research}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/herontwikkeling-en-transformatie" component={Redev}/>
          <Route path="/advies" component={Advice}/>
          </FadeIn>
        </Router>
      

  );
}

export default App;
