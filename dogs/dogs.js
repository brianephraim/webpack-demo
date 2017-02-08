require('./dogs.css');
module.exports = function(){
	document.write('<h2 class="dogs-header">Dogs</h2>');
	require('./collie')();
	require('./pug')();
	require('./wolf')();
};