export function generateResultText(calculateResult) {
	let resultText = '';

	if (calculateResult === 'invalid') {
		resultText = 'Invalid input. You must enter valid numbers.';
	} else if (calculateResult !== 'no-calc') {
		resultText = 'Result: ' + calculateResult;
	}
}

export function outputResult(resultText) {
	const output = document.getElementById('result');
	output.textContent = resultText;
}
