import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Dashboard, Login, Register } from './pages';
import Header from './components/Header';

const App = () => {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</Router>
		</>
	);
};

export default App;
