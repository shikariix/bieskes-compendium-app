import './BieskePage.css'
import BieskeInterface from '../interfaces/BieskeInterface'
import { useState } from 'react'

function InfoBlock(props: any) {
	const {tagline, description, name}: string = props;
	return (
		<div className="infoblock">
			<h2>{name}</h2>
			<label>"{tagline}"</label>
			<p>{description}</p>
		</div>
	);
}

function ImageBlock(props) {
	const {name}: string = props;
	const colors: string[] = props.colors;
	
	const [currentColor, setColor] = useState(colors[0]);
	const handleChange = (event) => {
		setColor(event.target.value)
	}
  
	// Fetch the external SVG
	fetch("/img/TinyBieskes_"+name+"_colorbase.svg")
	  .then(response => response.text())
	  .then(svgText => {
		// Inject SVG into the DOM
		const container = document.getElementById('colorsContainer');
		container.innerHTML = svgText;
		if (!colors.includes(currentColor)) { setColor(colors[0]); }
	 
	  });
	  //old image: <img src={"/img/TinyBieskes_"+name+".png"} alt={name} loading="eager" />
	return (
	<>
		<div className="imageblock">
			<div id="colorsContainer" className={"colors " + currentColor} width="200px"></div>
			<select value={currentColor} onChange={handleChange}>
			{ colors.map((color: string, index: number) => (<option value={color} key={index}>{color}</option>))}
		</select>
		</div>
		
		</>
	);
}

function PropertiesBlock(props: any) {
	const {size, classification}: string = props;
	return (
		<div className="propertiesblock">
			<label>Size: {size}</label>
			<label>Class: {classification}</label>
		</div>
	);
}

function BieskePage({bieske}: BieskeInterface) {
	return (
	<div id="bieskePage">
		<ImageBlock name={bieske.name} colors={bieske.colors} />
		<PropertiesBlock size={bieske.size} classification={bieske.classification} />
		<InfoBlock tagline={bieske.tagline} description={bieske.description} name={bieske.name} />
	</div>
  );
}

export default BieskePage;