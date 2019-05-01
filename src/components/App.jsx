import React from 'react';
import Header from './Header';
import Intro from './Intro';
import DayDisplay from './DayDisplay';
import MonthDisplay from './MonthDisplay';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Intro} />
        <Route path='/daydisplay' component={DayDisplay} />
        <Route path='/monthdisplay' component={MonthDisplay} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
