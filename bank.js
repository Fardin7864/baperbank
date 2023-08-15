const depositAmount = document.getElementById('deposit-amount');
const withdrowAmount = document.getElementById('withdrow-amount');
const balanceAmount = document.getElementById('balance-amount');
const depositFild = document.getElementById('deposit-input');
const withdrowFild = document.getElementById('withdrow-input');
let deposit = 0;
let withdrow = 0;
let balance = 1100;
balanceAmount.innerText = '$' + balance;


// console.log(depositFild,withdrowFild);
//Deposit function
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositNumber = parseInt(depositFild.value);
    if (depositNumber >=1) {
        deposit += depositNumber;
    balance += depositNumber;
    depositAmount.innerText = '$' + deposit;
    balanceAmount.innerText = '$' + balance;
    depositFild.value = '';
    }
    else{
        alert("Haramjada fajlami koris!!")
    }

})


// Withdrow function


document.getElementById('btn-withdrow').addEventListener('click',function(){
    const withdrowNumber = parseInt(withdrowFild.value);
    if (withdrowNumber >=1 && balance >= withdrowNumber) {
        withdrow += withdrowNumber;
    balance -= withdrowNumber;
    withdrowAmount.innerText = '$' + withdrow;
    balanceAmount.innerText = '$' + balance;
    withdrowFild.value = '';
    }
    else{
        alert("Haramjada fajlami koris!!")
    }

})