function factorial(){
    let num = document.getElementById("Data").value;
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }        
    document.getElementById("finalResult").innerHTML = num;
}

function e() {
    let num = document.getElementById("Data").value;
    for (let i = 1; i <= num; i++) {
        let answer = 1 / factorial(i);
        document.getElementById("finalResult").innerHTML = answer;
    }
}

function reset1 () {
    location.reload(true);
}