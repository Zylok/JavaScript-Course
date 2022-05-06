'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},
};

/*
const orderSet = new Set([
	'Pasta',
	'Pizza',
	'Pizza',
	'Risotto',
	'Pasta',
	'Pizza',
]);

console.log(orderSet);
console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
*/

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
	.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
	.set('open', 11)
	.set('close', 23)
	.set(true, 'We are open :D')
	.set(false, 'We are closed :(');
console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
rest.get(time > rest.get('open') && rest.get('close'));

console.log(rest.has('categories'));
console.log(rest.delete(2));
console.log(rest);
console.log(rest.size);
rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log(rest.get(arr));

const question = new Map([
	['question', 'What is the best programming language in the world?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'JavaScript'],
	['correct', 3],
	[true, 'Correct 🎉'],
	[false, 'Try again!'],
]);
console.log(question);

//Convert object to map

const hoursMap = new Map(Object.entries(restaurant));
console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
	if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = 3; //Number(prompt('Your answer'));

console.log(question.get(question.get('correct') === answer));

//conver map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

const obj = [2, 222, 3, 333];
for (const item of obj) {
	console.log(item);
}
