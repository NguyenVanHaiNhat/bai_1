function changeTemperature() {
    let a = +document.getElementById("Temperature").value;
    let FromC = document.getElementById("From").value;
    let to = document.getElementById("To").value;
    let result;

    if (FromC === "Fahrenheit" && to === "Celsius"){
        result = "result : " + (a * 5/9 - 32) + " C ";
    } else if (FromC === "Celsius" && to === "Fahrenheit") {
        result = "result : " + (a * 9/5 + 32) + " F ";
    } else if (to === "Fahrenheit"){
        result = "result : " + a + " F ";
    } else {
        result = "result : " + a + " C ";
    }
    document.getElementById("result").innerHTML = result;
}