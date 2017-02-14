import 'wild-animals/wild-animals.css';
import wolf from 'dogs/wolf';
import tiger from 'cats/tiger';
import rat from 'rodents/rat';

export default function(){
	document.body.innerHTML += (
		'<h2 class="wild-animals-header">Wild animals</h2>'
	);
	wolf();
	tiger();
	rat();
	setTimeout(() => {
		System.import('reptiles/turtle').then((turtle) => {
			alert('TURTLE ARRIVED');
			turtle.default()
		});
	},1000);
};
