import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navigation(props) {
	const {bieskes} = props;
	
	return (
		<div id="navigation">
			<h2>Navigation</h2>
			<span>Select a page to view it.</span>
			<nav className="menu">
				<Link className="menuitem" to="/">Home</Link>
				{ bieskes.map((bieske, index) => (
					<Link className="menuitem" to={"/bieske/" + bieske.name} value={bieske.id} key={index}>{bieske.name}</Link>
				))}
			</nav>
			
		</div>
	);
}

function NavigationOld(props) { 
	const {bieskes, handleChange} = props;
	
	return (
		<div id="navigation">
			<h2>Navigation</h2>
			<span>Select a page to view it.</span>
			<div className="menu">
				<div className="menuitem">
					<input type="radio" id="-1" onClick={handleChange} /><label htmlFor="-1">Home</label>
				</div>
				{ bieskes.map((bieske, index) => (
						<div className="menuitem" key={index}>
							<input type="radio" id={bieske.id} name="currentbieske" value={bieske.id} onClick={handleChange} />
							<label htmlFor={bieske.id}>{bieske.name}</label>
						</div>
				))}
			</div>
			
		</div>
	);
}
export default Navigation