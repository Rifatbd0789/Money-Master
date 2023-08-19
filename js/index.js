// Calculate button work
document.getElementById('Calculate').addEventListener('click', function(){
    const Income = getInputValue('income');
    const Food = getInputValue('food');
    const Rent = getInputValue('rent');
    const Clothes = getInputValue('clothes');
    if (Food === NaN) {
        Food === 0;
    }
    console.log(Food)
    const totalExp = Food + Rent + Clothes;
    setInputValue('Totalexp', totalExp);
    const Balance = Income - (Food + Rent + Clothes);
    setInputValue('balance', Balance);
    // console.log(Income, Food, Rent, Clothes)
})
