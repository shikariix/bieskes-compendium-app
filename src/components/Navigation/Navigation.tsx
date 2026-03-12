import BieskeInterface from '../interfaces/BieskeInterface'
import { Link } from 'react-router-dom';

function Navigation(props: any) {
	const {bieskes} = props;
	
	return (
		<div id="navigation">
			<h2>Navigation</h2>
			<span>Select a page to view it.</span>
			<nav className="menu">
				<Link className="menuitem" to="/">Home</Link>
				{ bieskes.map((bieske: BieskeInterface, index: number) => (
					<Link className="menuitem" to={"/bieske/" + bieske.name} value={bieske.id} key={index}>{bieske.name}</Link>
				))}
			</nav>
			
		</div>
	);
}

export default Navigation