import './BieskePage.css'
import type { Bieske } from '@utils/Bieske'
import { useState } from 'react'

function InfoBlock(props: any) {
	return (
		<div className="infoblock">
			<h2>{props.name}</h2>
			<label>"{props.tagline}"</label>
			<p>{props.description}</p>
		</div>
	);
}

function ImageBlock(props: any) {
	const [currentColor, setColor] = useState(props.colors[0]);
	const handleChange = (event: any) => {
		setColor(event.target.value)
	}
  
	// Fetch the external SVG
	fetch("/bieskes-compendium-app/img/TinyBieskes_"+props.name+"_colorbase.svg")
	  .then(response => response.text())
	  .then(svgText => {
		const container = document.getElementById('colorsContainer');
		if (container != null) { 
			if (svgText.includes("svg")) { 
				// Inject SVG into the DOM
				container.innerHTML = svgText;
				if (!props.colors.includes(currentColor)) { setColor(props.colors[0]); }
			} else {
				container.innerHTML = "";
			}
		}
	  })
	  .catch(error => {
		  console.log("error:", error);
	  });
	  
	
	return (
	<>
		<div className="imageblock">
			<div id="colorsContainer" className={"colors " + currentColor}></div>
			<select value={currentColor} onChange={handleChange}>
			{ props.colors.map((color: string, index: number) => (<option value={color} key={index}>{color}</option>))}
		</select>
		</div>
		
		</>
	);
}

function PropertiesBlock(props: any) {
	return (
		<div className="propertiesblock">
			<label>Size: {props.size}</label>
			<label>Class: {props.classification}</label>
		</div>
	);
}

function BieskePage({bieske}: {bieske: Bieske}) {
	return (
	<div id="bieskePage">
		<ImageBlock name={bieske.name} colors={bieske.colors} />
		<PropertiesBlock size={bieske.size} classification={bieske.classification} />
		<InfoBlock tagline={bieske.tagline} description={bieske.description} name={bieske.name} />
	</div>
  );
}

export default BieskePage;