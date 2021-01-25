// login button event handler
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    const transactionArea = document.getElementById('transaction-area');
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block';
})


// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
    
    const depositNumber = getInput('depositAmount');
    
    updateSpanText('currentDeposit', depositNumber);

    document.getElementById('depositAmount').value = "";

    updateSpanText('currentBalance', depositNumber);



})

function updateSpanText(id, depositNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = depositNumber + currentNumber;
        document.getElementById(id).innerText = total;

}

function getInput(id) {
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}


// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {

    const withdrawNumber = getInput('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawNumber);

    document.getElementById('withdrawAmount').value = "";

    updateSpanText('currentBalance', -1* withdrawNumber);






})

