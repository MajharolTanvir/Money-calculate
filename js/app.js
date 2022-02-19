function calculateValue() {
	// total expence money
	const foodInput = document.getElementById('food-price');
	const foodPrice = parseFloat(foodInput.value);
	const rentInput = document.getElementById('rent-price');
	const rentPrice = parseFloat(rentInput.value);
	const clothesInput = document.getElementById('clothes-price');
	const clothesPrice = parseFloat(clothesInput.value);
	const totalExpencesmoney = foodPrice + rentPrice + clothesPrice;
	// total expenses show
	const expensesValue = document.getElementById ('total-expenses')
	expensesValue.innerText = totalExpencesmoney;
	const expensesText = parseFloat(expensesValue.innerText);
	// Balance show

	return expensesText;
	


}

document.getElementById('Calc-btn').addEventListener('click', function () {
	calculateValue();
})