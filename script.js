function calculateSIP() {
    let P = document.getElementById("monthly").value;
    let r = document.getElementById("rate").value / 100 / 12;
    let n = document.getElementById("years").value * 12;

    let amount = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    document.getElementById("result").innerHTML =
        "Estimated Value: ₹ " + Math.round(amount).toLocaleString();
}
