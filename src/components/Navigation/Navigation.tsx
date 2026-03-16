import type { Bieske } from '../types/Bieske'
import { Link } from 'react-router-dom';

function Navigation(props: any) {
	
	return (
		<div id="navigation">
			<h2>Navigation</h2>
			<span>Select a page to view it.</span>
			<nav className="menu">
				<Link className="menuitem" to="/">Home</Link>
				{ props.bieskes.map((bieske: Bieske, index: number) => (
					<Link className="menuitem" to={"/bieske/" + bieske.name} value={bieske.id} key={index}>{bieske.name}</Link>
				))}
			</nav>
			
		</div>
	);
}

export default Navigation