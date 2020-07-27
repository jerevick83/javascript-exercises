function add (num1,num2) {
	let calculator = num1+num2;
	return calculator;
}

function subtract (num1,num2) {
	
let	calculator = num1-num2;
	return calculator;
}

function sum (sum) {
	return sum.length ? sum.reduce((num1,num2) => num1+num2):0;
		
}

function multiply (multiply) {
	return multiply.length ? multiply.reduce((num1,num2)=> num1*num2):0;
}

function power(num1,num2) {
	return  num1 ** num2;
}

function factorial(num) {
	if (num<0){
		return -1;
	}else if (num===0){
		return 1;
	}return (num *factorial(num -1));
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}