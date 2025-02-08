let output;

function calc() {
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById('input2').value); 
    let operator = String(document.getElementById('operator').value);

    if ((isNaN(input1) || isNaN(input2))) {
        alert("error :(");
    }
    if (input1 < 0 || input2 < 0) {
        alert("error :(");
    }

    if (operator == '+') {
        output = input1 + input2;
    }
    if (operator == '-') {
        output = input1 - input2;
    }
    if (operator == '*') {
        output = input1 * input2;
    }
    if (operator == '/') {
        if (input2 == 0) {
            alert("It's over 9000!");
        } else {
            output = input1 / input2;
        }
    }

    //devide by 0
    if (operator == '%') {
        if (input2 == 0) {
            alert("It's over 9000!");
        } else {
            output = input1 % input2;
        }
    }

    // clear input
    console.log(output);
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
}

function showAlert() {
    alert('Please, use me...');
}

setInterval(showAlert, 30000);