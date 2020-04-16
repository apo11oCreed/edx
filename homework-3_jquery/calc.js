/*
 * Implement all your JavaScript in this file!
 */
$(window).on('load', function() {
    console.log('The document is loaded!');
    var display = $('#display'),
        inputNumber = '',
        inputNumbers = [],
        operationInit = false,
        operation = '',
        result = '',
        currNo = '',
        prevNo = '';

    display.val('');

    $('#button0,#button1,#button2,#button3,#button4,#button5,#button6,#button7,#button8,#button9').on('click', inputHandler);
    $('#subtractButton,#addButton,#multiplyButton,#divideButton').on('click', operationHandler);
    $('#equalsButton').on('click', evaluate);
    $('#clearButton').on('click', clearAll);

    function inputHandler() {
        if (operationInit == true) {
            console.log('inputNew');
            console.log('operationInit = ' + operationInit);
            display.val('');
            display.val(display.val() + $(this).val());
            operationInit = false;
        } else {
            console.log('inputInit');
            console.log('operationInit = ' + operationInit);
            display.val(display.val() + $(this).val());
        }

    }

    function operationHandler() {
        inputNumber = display.val();
        inputNumbers.push(inputNumber);
        console.log(inputNumbers);
        operationInit = true;
        if ($(this).attr('id') == 'subtractButton') {
            if (operation) {
                currNo = inputNumbers[inputNumbers.length - 1];
                prevNo = inputNumbers[inputNumbers.length - 2];
                if (currNo !== 'Infinity') {
                    result = Number(prevNo) - Number(currNo);
                } else {
                    result = 'Infinity';
                }
                display.val(result);
            } else {
                operation = 'subtract';
            }

        } else if ($(this).attr('id') == 'addButton') {
            operation = 'addition';
        } else if ($(this).attr('id') == 'multiplyButton') {
            operation = 'multiplication';
        } else {
            operation = 'division';
        }
        console.log(operation);
    }

    function evaluate() {

        inputNumber = display.val();
        console.log(inputNumbers);
        console.log('operationInit = ' + operationInit);
        console.log(operation);

        if (inputNumbers.length > 0) {
            //     inputNumber = display.val();
            //     inputNumbers.push(inputNumber);
            inputNumbers.push(inputNumber);
            if (inputNumbers.length > 1) {
                inputNumber = display.val();
                //inputNumbers.push(inputNumber);
                currNo = inputNumbers[inputNumbers.length - 1];
                prevNo = inputNumbers[inputNumbers.length - 2];
                console.log(currNo);
                console.log(prevNo);

                if (currNo !== 'Infinity') {

                    if (operation == 'subtract') {
                        result = Number(prevNo) - Number(currNo);
                    } else if (operation == 'addition') {
                        console.log(operation);
                        result = Number(prevNo) + Number(currNo);
                    } else if (operation == 'multiplication') {
                        console.log(operation);
                        result = Number(prevNo) * Number(currNo);
                    } else {
                        console.log(operation);
                        result = Number(prevNo) / Number(currNo);
                    }
                    display.val(result);
                } else {
                    display.val('Infinity');
                }
            } else {
                display.val(display.val());
            }
        }

        // } else {
        //     display.val(display.val());
        // }
    }

    function clearAll() {
        inputNumber = '';
        inputNumbers = [];
        result = '';
        display.val('');
        operationInit = false;
        console.log('clearAll');
        console.log(inputNumbers);
    }
});