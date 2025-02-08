$(document).ready(function() {
    let output;
    $('button').click(function() {
        let input1 = Number($('#input1').val());
        let input2 = Number($('#input2').val()); 
        let operator = $('#operator').val();

        // Check if the inputs are valid numbers and not negative
        if (isNaN(input1) || isNaN(input2) || input1 < 0 || input2 < 0) {
            alert("error :(");
            return;
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
        //-------------------
        if (operator == '/') {
            if (input2 == 0) {
                alert("It's over 9000!");
            } else {
                output = input1 / input2;
            }
        }
        if (operator == '%') {
            if (input2 == 0) {
                alert("It's over 9000!");
            } else {
                output = input1 % input2;
            }
        }
        console.log(output);

        // Clear inputs
        $('#input1').val('');
        $('#input2').val('');
    });
    
    setInterval(function() {alert('Please, use me...');}, 30000);
});
