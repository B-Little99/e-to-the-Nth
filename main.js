function factorial(j){
    let num = j;
    if (num === 0 || num === 1) {
        return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    } 
    return num;
}

function e() {
    let num = document.getElementById("Data").value;
    let answer = 0;
    for (let i = 0; i <= num; i++) {
        answer += 1 / factorial(i);
    }
    document.getElementById("finalResult").innerHTML = answer;
}

function reset1 () {
    location.reload(true);
}