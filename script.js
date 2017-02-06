// display a numbered list of all names in the array
// add a random number to each name
// sort the list based on the random number
// 

const bbArray = ['Walter', 'Jessie', 'Hank', 'Skyler', 'Gus', 'Tuco', 'Pete', 'Badger', 'Flynn', 'Mike', 'Marie', 'Saul', 'Jane', 'Lydia', 'Todd', 'Steve', 'Ted', 'Huell', 'Combo', 'Jack'];



const bbList = function(array) {
	const charList = document.getElementById('charList');

	for (var i = 0; i < array.length; i++) {
		var newLi = document.createElement('li');
		newLi.appendChild(document.createTextNode(array[i]));
		charList.appendChild(newLi);
	}
	return newLi;
}
bbList(bbArray);