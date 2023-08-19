// Calculate Button work
document.getElementById('Calculate').addEventListener('click', function(){
    const Income = getInputValue('income');
    const Food = getInputValue('food');
    const Rent = getInputValue('rent');
    const Clothes = getInputValue('clothes');
    const totalExp = Food + Rent + Clothes;
    setInputValue('Totalexp', totalExp);
    const Balance = Income - (Food + Rent + Clothes);
    setInputValue('balance', Balance);
    // console.log(Income, Food, Rent, Clothes)
})
// Save Button work
document.getElementById('saveBtn').addEventListener('click', function(){
    const save = getInputValue('saveField')
    const Income = getInputValue('income');
    const saved = Income * (save/100)
    setInputValue('saving', saved);
    const balances = document.getElementById('balance');
    const balanceString = balances.innerText
    const balance = parseFloat(balanceString);
    const previous = document.getElementById('remain');
    previous.innerText= balance - saved;
})
