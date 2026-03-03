function calculate(operation) {
	const form = document.forms['Calculator'];
	const a = parseFloat(form['numberA'].value);
	const b = parseFloat(form['numberB'].value);
	let result;

	if (isNaN(a) || isNaN(b)) {
		alert('Vui lòng nhập một số hợp lệ!');
		return;
	}
	
	switch (operation) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case '*':
			result = a * b;
			break;
		case '/':
			if (b === 0) {
				alert('Không thể thực hiện phép chia với 0!');
				return;
			}
			result = a / b;
			break;
		default:
			alert('Lệnh không hợp lệ!');
			return;
	}

	form['result'].value = result;
}