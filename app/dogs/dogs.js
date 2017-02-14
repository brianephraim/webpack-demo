import './dogs.css';
import collie from './collie';
import wolf from './wolf';
export default function(extraClass){
	document.body.innerHTML += (
		'<h2 class="dogs-header">Dogs</h2>'
	);
	collie();
	wolf();
};
