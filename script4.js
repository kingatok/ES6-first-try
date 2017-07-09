const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

function average(...args) {
	let result = 0;
	args.forEach(arg => result += arg);
	console.log(result/args.length);
}

average(...grades);