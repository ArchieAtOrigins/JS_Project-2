
const bbArray = ['Walter', 'Jessie', 'Hank', 'Skyler', 'Gus', 'Tuco', 'Pete', 'Badger', 'Flynn', 'Mike', 'Marie', 'Saul', 'Jane', 'Lydia', 'Todd', 'Steve', 'Ted', 'Huell', 'Combo', 'Jack'];

const wdArray = ['Rick', 'Daryl', 'Glenn', 'Maggie', 'Carl', 'Carol', 'Michonne', 'Lori', 'Morgan', 'Tyreese', 'Sasha', 'Beth', 'Tara', 'Hershel'];

const ffArray = ['Malcolm', 'Zoe', 'Hoban', 'Inara', 'Jayne', 'Kaylee', 'Simon', 'River', 'Sheperd', 'Saffron', 'Badger', 'Patience', 'Tara';

const wdArray = ['Piper', 'Alex', 'Sophia', 'Stella', 'Suzanne', 'Nicky', 'Doggett', 'Red', 'Poussey', 'Diaz', 'Jackie', 'Lorna', 'Sam', 'Alieda', 'Caputo', 'Norma', 'Gloria', 'Boo', 'Jane', 'Wanda', 'Piscatella', 'Hayes'];


const castList = function(array) {
	const charList = document.getElementById('charList');

	for (var i = 0; i < array.length; i++) {
		var newLi = document.createElement('li');
		newLi.appendChild(document.createTextNode(array[i]));
		charList.appendChild(newLi);
	}
	return newLi;
}
castList(wdArray);




