function calculateValue() {
	// total expence money
	const foodInput = document.getElementById('food-price');
	const foodPrice = parseFloat(foodInput.value);
	const rentInput = document.getElementById('rent-price');
	const rentPrice = parseFloat(rentInput.value);
	const clothesInput = document.getElementById('clothes-price');
	const clothesPrice = parseFloat(clothesInput.value);
	const totalExpencesmoney = foodPrice + rentPrice + clothesPrice;
	// Income show
	const incomeInput = document.getElementById('income-value')
	const incomeFiled = parseFloat(incomeInput.value);
	// total expenses show
	const expensesValue = document.getElementById ('total-expenses')
	expensesValue.innerText = totalExpencesmoney;
	const expensesText = parseFloat(expensesValue.innerText);
	// Balance show
	const balanceInput = document.getElementById('balance-amount');
	balanceInput.innerText = expensesText - incomeFiled;
	const balanceText = parseFloat(balanceInput.innerText);
	return balanceText;
}

document.getElementById('Calc-btn').addEventListener('click', function () {
	calculateValue();
})