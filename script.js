// sort the names of the character alphabetically.
// Allow user to select show from dropdown list and 
// create a list of the main characters in the show selected.
// Allow user to click on character to see details of that character

const bbArray = ['Walter', 'Jessie', 'Hank', 'Skyler', 'Gus', 'Tuco', 'Skinny Pete', 'Badger', 'Flynn', 'Mike', 'Marie', 'Saul', 'Jane', 'Lydia', 'Todd', 'Steve', 'Ted', 'Huell', 'Combo', 'Jack'];

const wdArray = ['Rick', 'Daryl', 'Glenn', 'Maggie', 'Carl', 'Carol', 'Michonne', 'Lori', 'Morgan', 'Tyreese', 'Sasha', 'Beth', 'Tara', 'Hershel'];

const ffArray = ['Malcolm', 'Zoe', 'Hoban', 'Inara', 'Jayne', 'Kaylee', 'Simon', 'River', 'Sheperd', 'Saffron', 'Badger', 'Patience', 'Tara'];

const obArray = ['Piper', 'Alex', 'Sophia', 'Stella', 'Crazy Eyes', 'Nicky', 'Doggett', 'Red', 'Poussey', 'Diaz', 'Jackie', 'Lorna', 'Sam', 'Alieda', 'Caputo', 'Norma', 'Gloria', 'Big Boo', 'Jane', 'Wanda', 'Piscatella', 'Hayes'];

const showsArray = ['bbArray', 'wdArray', 'ffArray', 'obArray'];

// captures select box value
const showDropdown = document.getElementById('showName').value; // This is a string

// sort array alphabetically
const nameSort = function(array) {
	const arraySorted = array.sort();
	// return arraySorted;
}
console.log(nameSort(obArray));

// creates a numbered list from an array of cast members names
const castList = function(array) {
	const charList = document.getElementById('charList');

	for (var i = 0; i < array.length; i++) {
		var newLi = document.createElement('li');
		newLi.appendChild(document.createTextNode(array[i]));
		charList.appendChild(newLi);
	}
	return newLi;
}
console.log(castList(obArray)) // Castlist seems to be working fine

// loop over arrays and look for match to user selected show
for (var i=0, max=showsArray.length; i<max; i++) {
	if (showDropdown === showsArray[i]) {
		castList(showsArray[i]);
	}
}

