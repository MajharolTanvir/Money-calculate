function calculateValue() {
	// total expence money
	const foodInput = document.getElementById('food-price');
	const foodPrice = parseFloat(foodInput.value);
	if(isNaN(foodPrice) == true){
		alert('Input number')
	}
	const rentInput = document.getElementById('rent-price');
	const rentPrice = parseFloat(rentInput.value);
	if(isNaN(rentPrice) == true){
		alert('Input number')
	}
	const clothesInput = document.getElementById('clothes-price');
	const clothesPrice = parseFloat(clothesInput.value);
	if(isNaN(clothesPrice) == true){
		alert('Input number')
	}
	const totalExpencesmoney = foodPrice + rentPrice + clothesPrice;
	// Income show
	const incomeInput = document.getElementById('income-value')
	const incomeFiled = parseFloat(incomeInput.value);
	if(isNaN(incomeFiled) == true || incomeFiled < 0){
		alert('Input a positive number')
	}
	// total expenses show
	const expensesValue = document.getElementById('total-expenses')
	expensesValue.innerText = totalExpencesmoney;
	const expensesText = parseFloat(expensesValue.innerText);
	if (incomeFiled < expensesText){
		alert('Please enter a valid expences amount')
	}
	// Balance show
	const balanceInput = document.getElementById('balance-amount');
	balanceInput.innerText = incomeFiled - expensesText;
	const balanceText = parseFloat(balanceInput.innerText);
	return balanceText;
}
function savingAmount(){
	// Parsent amount show
	const incomeText = document.getElementById('income-value');
	const incomeAmount = parseFloat(incomeText.value);
	const inputPersent = document.getElementById('input-persent');
	const inputPersentText = parseFloat(inputPersent.value);
	const inputPersentAmount = incomeAmount / inputPersentText;
	if(isNaN(inputPersentAmount) == true || inputPersentAmount < 0){
		alert('Input a positive number')
	}
	// saving amount show
	const savingFiled = document.getElementById('saving-amount');
	savingFiled.innerText = inputPersentAmount;
	const savingText = parseFloat(savingFiled.innerText);
	// Remaining amount
	const balanceInput = document.getElementById('balance-amount');
	const balanceAmount = parseFloat(balanceInput.innerText);
	const remainingAmount = document.getElementById('remaining-amount');
	const remainingOutput = balanceAmount - savingText;
	remainingAmount.innerText = remainingOutput;
	return remainingOutput;

}

document.getElementById('Calc-btn').addEventListener('click', function () {
	calculateValue();
})
document.getElementById('saving-btn').addEventListener('click', function(){
	savingAmount();
})