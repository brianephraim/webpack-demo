import './cats.css';
import tiger from './tiger';
import houseCat from './house-cat';
export default function(){
	document.body.innerHTML += (
		'<h2 class="cats-header">Cats</h2>'
	);
	tiger();
	houseCat();
};
