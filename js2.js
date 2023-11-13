

function changeCtoF() {
    let a = +document.getElementById('c').value;
    let y = a * 9/5 + 32;
    document.getElementById('result').innerHTML = 'result :' + y + ' độ C';
}

function changeFtoC() {
    let a = +document.getElementById('c').value;
    let z = a * 5/9 - 32;
    document.getElementById('result').innerHTML ='result :' + z + ' độ F';
}