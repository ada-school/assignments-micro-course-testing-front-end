function validateInput(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('Inputs must be numbers')
	}
	if (a === undefined || b === undefined) {
		throw new Error('Inputs cannot be undefined')
	}
}

function add(a, b) {
	validateInput(a, b)
	return a + b
}

function subtract(a, b) {
	validateInput(a, b)
	return a - b
}

function multiply(a, b) {
	validateInput(a, b)

	if (a === 0 || b === 0) return undefined

	return a * b
}

function divide(a, b) {
	validateInput(a, b)
	if (b === 0) {
		throw new Error('Division by zero')
	}
	return a / b
}

function getDivisors(n) {
	if (typeof n !== 'number' || n === undefined) {
		throw new Error('Input must be a number')
	}
	if (n < 1) {
		throw new Error('Input must be a positive integer')
	}

	const divisors = []
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			divisors.push(i)
		}
	}
	return divisors
}

module.exports = {
	add,
	subtract,
	multiply,
	divide,
	getDivisors,
}
