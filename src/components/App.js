import React from 'react';
import Main from './Main.js'
import Navigation from './Navigation'
import Research from './Research'
import Contact from './Contact'
import Redev from './Redev'
import Advice from './Advice'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ScrollToTop from './Helpers/ScrollToTop'


function App() {
  
  return (
    <Router>
      <Navigation/>
      <ScrollToTop />
        <Route exact path="/" component={Main}/>
        <Route path="/onderzoek" component={Research}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/herontwikkeling-en-transformatie" component={Redev}/>
        <Route path="/advies" component={Advice}/>
    </Router>
  );
}

export default App;
