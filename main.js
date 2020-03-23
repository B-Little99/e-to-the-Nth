let n = document.getElementById("Data").value;

function factorial() {
    for (i = 1; i <=n; i++);
    n * (n - 1);
}

function e() {
    for (i = 1; i <= n; i++);
    let answer = (1 / factorial(n));
    answer += 1;
    document.getElementById("finalResult").innerHTML = answer;
}

function reset1 () {
    location.reload(true);
}