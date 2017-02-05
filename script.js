// display a numbered list of all names in the array
// add a random number to each name
// sort the list based on the random number
// 

const bbArray = ['Walter', 'Jessie', 'Hank', 'Skyler', 'Gus', 'Tuco', 'Pete', 'Badger', 'Flynn', 'Mike', 'Marie', 'Saul', 'Jane', 'Lydia', 'Todd', 'Steve', 'Ted', 'Huell', 'Combo', 'Jack'];
const charList = document.getElementById('ol');

const newItem = function() {
	console.log("new Item");
	const newLi = document.createElement('li');
	return newli;
}
charList.appendChild(newItem);

// const color = function() {
// 	math.round(math.random)
// }

window.onload = newItem;

// bbArray.forEach()

// charList.appendChild(newLi);
// 	newLi.innerText = 'Greetings Earthling';