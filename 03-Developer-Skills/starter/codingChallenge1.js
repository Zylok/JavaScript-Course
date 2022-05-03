'use strict';
/*Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �
*/

// 1) Understanding the problem
// - Array transformed to string separated by 3 dots
// - What is the x days? Answer index + 1

// 2) breaking up into sub-problems
// - Transform the array into a string
// - Transform each element to string with ºC
// - String needs to contain day (index  + 1)
// - Add ... between elements and start and end of string
/*
function printForecast(arr) {
	let fullString = '...';
	for (let i = 0; i < arr.length; i++) {
		fullString += ` ${arr[i]}ºC in ${i + 1} days ...`;
	}
	console.log(fullString);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/
