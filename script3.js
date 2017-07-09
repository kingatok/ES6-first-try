function average(...args) {
	let result = 0;
	args.forEach(arg => result += arg);
	console.log(result/args.length);
}

average(1);
average(1, 3);
average(1, 3, 6, 6);