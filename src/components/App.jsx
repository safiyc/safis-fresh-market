import React from 'react';
import Header from './Header';
import Intro from './Intro';
import DayDisplay from './DayDisplay';
import MonthDisplay from './MonthDisplay';
import Footer from './Footer';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <style jsx global>{`
        * {
          font-family: Verdana, sans-serif;
        }
        html, body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        h1, h2, h3, h4 {
          text-align: center;
        }
        #nav-section {
          display: flex;
          justify-content: flex-end;
          background-color: lightgreen;
          border-top: 1px solid rgba(255,255,255,.5);border-bottom: 1px solid black; 
          padding-right: 10px;
        }
        .nav_links {
          text-decoration: none;
          color: black;
          font-weight: 600;
          padding: 5px;
        }
        .nav_links:hover {
          background-color: rgba(255,255,0,.5);
        }
        .link_active {
          color: orange;
        }
      `}</style>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Intro} />
            <Route path='/daydisplay' component={DayDisplay} />
            <Route path='/monthdisplay' component={MonthDisplay} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
