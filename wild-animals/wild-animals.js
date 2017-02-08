require('./wild-animals.css');
module.exports = function(){
	document.write('<h2>Wild animals</h2>');
	require('../dogs/wolf')();
	require('../cats/tiger')();
	require('../cats/lion')();
	require('../rodents/rat')();
	alert('There are the wild animals');
};