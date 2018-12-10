//GET THE TWO INPUTS FROM THE HTML FILE
const ip1 = document.getElementById('ip1');
const ip2 = document.getElementById('ip2');
const calc = document.getElementById('calc');
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');
const result = document.getElementById('results');

calc.addEventListener('click', function () {
    const one = parseFloat(ip1.value);
    const two = parseFloat(ip2.value);

    result.innerHTML = one + two;
});

clr.addEventListener('click', function () {
    ip1.value = '';
    ip2.value = '';
    result.innerHTML = '';

})

rand.addEventListener('click', function () {
    ip1.value = random();
    ip2.value = random();
});

function random() {
    return Math.floor(Math.random() * 1000);
} ip1.value = random();