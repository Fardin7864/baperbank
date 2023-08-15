
const email = document.getElementById('email');
const pass = document.getElementById('pass');

document.getElementById('btn-submit').addEventListener('click',function(){
    if (email.value === "sontan@bap.com" && pass.value === "123") {
        location.href = 'bank.html';
    }
    else{
        alert("Toi pass volegesos!!! tore tejjo korlam");
    }
})