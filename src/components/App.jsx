import React from 'react';
import Header from './Header';
import Intro from './Intro';
import DayDisplay from './DayDisplay';
import MonthDisplay from './MonthDisplay';
import Footer from './Footer';

function App() {
	return (
		<div>
			<Header />
			<Intro />
			<DayDisplay />
			<MonthDisplay />
			<Footer />
		</div>
	);
}

export default App;
