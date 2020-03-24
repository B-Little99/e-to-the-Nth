function factorial(j){
    let num = j;
    if (num === 0 || num === 1) {
        return 1; //The answer for factorial 0 and 1 both equal 1.
    }
    for (let i = num - 1; i >= 1; i--) {
        num *= i; //This loop iterates from the original number taking away one each time until it reaches 1.
    } 
    return num;
}

function e() {
    let num = document.getElementById("Data").value;
    let answer = 0;
    for (let i = 0; i <= num; i++) {
        answer += (1 / factorial(i)); // The loop takes the factorial and applies it until the loop conditions (the user input) is met.
    }
    document.getElementById("finalResult").innerHTML = answer;
}

function reset1 () {
    location.reload(true);
}