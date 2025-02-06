function firstWord(s) {
 return s.split(' ')[0];
	return s.trim().split(' ')[0]; 
	console.log(firstWord('1234')); 
	console.log(firstWord(' '));
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
