import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BieskePage from './components/BieskePage/BieskePage'
import Navigation from './components/Navigation/Navigation'
import HomePage from './components/HomePage/HomePage'
import type { Bieske } from '@utils/Bieske'
import bieskesJson from './assets/data/bieskesData.json'
import './App.css'

function App() {

	const bieskes: Bieske[] = bieskesJson.bieskes;
	
	return (
		<BrowserRouter>
			
			<Navigation bieskes={bieskes} />
			
			<div id="pagecontent">
				<h1>Bieskes Compendium</h1>
				
			  {/* Routes */}
				<Routes>
					<Route path="/" element={<HomePage />} />
					{ bieskes.map((bieske: Bieske, index: number) => (
					<Route key={index} path={"/bieske/"+bieske.name} element={<BieskePage bieske={bieske} />} />))}
				</Routes>
			</div>
			
			
		</BrowserRouter>
	)
}

export default App
