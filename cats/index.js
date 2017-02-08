require('./cats.css');
module.exports = function(){
	document.write('<h2 class="cats-header">Cats</h2>');
	require('./tiger')();
	require('./lion')();
};