
// declear global veriable
var getValue, income, totalBalance, balanceField;

// get Input and check the value valid or not
function getInputValue(inputValue) {
    const inputField = document.getElementById(inputValue);
    getValue = parseInt(inputField.value);
    if (getValue < 0 || isNaN(getValue)) error();
    else return getValue;

}

// Show all Error here
function error(Error) {
    if (Error == 'expence') alert('You can Not EXPENCE more then your income');
    else if (Error == 'save') alert('Sorry !!!  You can not SAVE money');
    else alert(" Attention!!! Please Enter Positive Number");
}

// set Final result  using function negative or other not allow
function setValue(AmountField, totalAmount, getBalanceField, subAmount) {
    const expenceField = document.getElementById(AmountField);
    if (totalAmount >= 0) expenceField.innerText = totalAmount;
    balanceField = document.getElementById(getBalanceField);
    const balance = subAmount - totalAmount;
    if (balance >= 0) balanceField.innerText = balance;

}



//   Calculate button operation
const calculate = document.getElementById('Calculate')
    .addEventListener('click', function () {

        // user input function calling
        income = getInputValue('total-income');
        const foodcost = getInputValue('food-cost');
        const rentcost = getInputValue('rent-cost');
        const clothcost = getInputValue('cloth-cost');

        // calculate total Expence
        const totalExpence = foodcost + rentcost + clothcost;

        // check error that Total Expence more then income
        if (totalExpence > income) error('expence');

        // if error then rest of the field No Excuted 
        else setValue('expence-total', totalExpence, 'balance', income);

    })

// click save button operation

document.getElementById('saving-btn').addEventListener('click', function () {
    const savingAmount = getInputValue('saving-input-field');
    const savingTotal = income * (savingAmount / 100);

    totalBalance = balanceField.innerText;
   
    // check error that Savinnng is more then totalBalance or Not
    if (savingTotal > totalBalance) error('save');

    // if error then rest of the field No Excuted 
    else setValue('saving-field', savingTotal, 'remaining-balance', totalBalance)

})


