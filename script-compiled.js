'use strict';

var first = 'Hello';
var second = 'World';

function helloWorld() {
	console.log(first + ' ' + second);
}

helloWorld();
"use strict";

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(7));
"use strict";

function average() {
	var result = 0;

	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	args.forEach(function (arg) {
		return result += arg;
	});
	console.log(result / args.length);
}

average(1);
average(1, 3);
average(1, 3, 6, 6);
"use strict";

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

function average() {
	var result = 0;

	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	args.forEach(function (arg) {
		return result += arg;
	});
	console.log(result / args.length);
}

average.apply(undefined, grades);
'use strict';

var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = array[2],
    lastname = array[4];

console.log(firstname, lastname);
