import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BieskePage from './components/BieskePage/BieskePage'
import Navigation from './components/Navigation/Navigation'
import HomePage from './components/HomePage/HomePage'
import bieskesJson from './assets/data/bieskesData.json'
import './App.css'

function App() {

	return (
		<BrowserRouter>
			
			<Navigation bieskes={bieskesJson.bieskes} />
			
			<div id="pagecontent">
				<h1>Bieskes Compendium</h1>
				
			  {/* Routes */}
				<Routes>
					<Route path="/" element={<HomePage />} />
					{ bieskesJson.bieskes.map((bieske, index) => (
					<Route path={"/bieske/"+bieske.name} element={<BieskePage bieske={bieskesJson.bieskes.find(bies => bies.name === bieske.name)} />} />))}
				</Routes>
			</div>
			
			
		</BrowserRouter>
	)
}

export default App
