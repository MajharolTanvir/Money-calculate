function calculateValue(){
 const foodInput = document.getElementById('food-price');
 const foodPrice = parseFloat(foodInput.value);
 const rentInput = document.getElementById('rent-price');
 const rentPrice = parseFloat(rentInput.value);
 const clothesInput = document.getElementById('clothes-price');
 const clothesPrice = parseFloat(clothesInput.value);
 const totalExpences = foodPrice + rentPrice + clothesPrice;
 return totalExpences;


}
document.getElementById('Calc-btn').addEventListener('click', function(){
    calculateValue();
})