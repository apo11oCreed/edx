/*
 * Implement all your JavaScript in this file!
 */
$(window).on('load', function() {
    console.log('The document is loaded!');
    var display = $('#display'),
        result = '',
        currNo = '',
        prevNo = '',
        lastOperation = '',
        currentOperation = '';

    display.val('');

    $('#button0,#button1,#button2,#button3,#button4,#button5,#button6,#button7,#button8,#button9').on('click', inputHandler);
    $('#subtractButton,#addButton,#multiplyButton,#divideButton').on('click', operationHandler);
    $('#equalsButton').on('click', evaluate);
    $('#clearButton').on('click', clearAll);

    var operationObject = {
        numbers: [],
        operationInit: false,
        evaluated: false,
        operand: false,
        operationContinued: false,
        operations: []
    };

    function inputHandler() {
        if (operationObject.evaluated == true) {

            operationObject.numbers = [];
            operationObject.operations = [];

            display.val('');
            display.val(display.val() + $(this).val());

            operationObject.evaluated = false;

            console.log('test1');

        } else if (operationObject.operationInit == true || operationObject.operationContinued == true) {

            display.val('');
            display.val(display.val() + $(this).val());
            operationObject.operand = true;
            operationObject.operationInit = false;
            operationObject.operationContinued = false;

            console.log('test2');

        } else {

            display.val(display.val() + $(this).val());

            console.log('test3');

        }

    }

    function operationHandler() {

        inputNumber = display.val();
        operation = $(this).attr('id');

        if (inputNumber != '') {

            operationObject.numbers.push(Number(inputNumber));

            if (operationObject.evaluated == true) {

                operationObject.operations.push(operation);
                operationObject.evaluated = false;
                operationObject.operationContinued = true;

                console.log('test4');

            } else if (operationObject.operationInit == true) {

                if ($(this).attr('id') == 'subtractButton') {
                    operationObject.operations.push('subtractButton');
                } else if ($(this).attr('id') == 'addButton') {
                    operationObject.operations.push('addButton');
                } else if ($(this).attr('id') == 'multiplyButton') {
                    operationObject.operations.push('multiplyButton');
                } else {
                    operationObject.operations.push('divideButton');
                }

                operationObject.operationInit = true;

                console.log('test5');

            } else if (operationObject.evaluated == false && operationObject.operations.length > 0) {

                operationObject.operations.push(operation);

                currentOperation = operationObject.operations[operationObject.operations.length - 2];

                currNo = operationObject.numbers[operationObject.numbers.length - 1];
                prevNo = operationObject.numbers[operationObject.numbers.length - 2];

                if (currentOperation == 'subtractButton') {
                    result = Number(prevNo) - Number(currNo);
                } else if (currentOperation == 'addButton') {
                    result = Number(prevNo) + Number(currNo);
                } else if (currentOperation == 'multiplyButton') {
                    result = Number(prevNo) * Number(currNo);
                } else {
                    result = Number(prevNo) / Number(currNo);
                }

                display.val(result);

                operationObject.numbers.push(result);
                operationObject.operationContinued = true;

                console.log('test6');

            } else {

                if ($(this).attr('id') == 'subtractButton') {
                    operationObject.operations.push('subtractButton');
                } else if ($(this).attr('id') == 'addButton') {
                    operationObject.operations.push('addButton');
                } else if ($(this).attr('id') == 'multiplyButton') {
                    operationObject.operations.push('multiplyButton');
                } else {
                    operationObject.operations.push('divideButton');
                }

                operationObject.operationInit = true;

                console.log('test7');

            }

            console.log(operationObject);

        } else {
            display.val(inputNumber);
            console.log('No numbers entered!');

        }
    }

    function evaluate() {

        inputNumber = display.val();

        if (operationObject.operand == true) {

            inputNumber = display.val();

            operationObject.numbers.push(Number(inputNumber));

            lastOperation = operationObject.operations[operationObject.operations.length - 1];

            currNo = operationObject.numbers[operationObject.numbers.length - 1];
            prevNo = operationObject.numbers[operationObject.numbers.length - 2];

            if (currNo !== 'Infinity') {

                if (lastOperation == 'subtractButton') {
                    result = Number(prevNo) - Number(currNo);
                } else if (lastOperation == 'addButton') {
                    result = Number(prevNo) + Number(currNo);
                } else if (lastOperation == 'multiplyButton') {
                    result = Number(prevNo) * Number(currNo);
                } else {
                    result = Number(prevNo) / Number(currNo);
                }

                display.val(result);

                operationObject.evaluated = true;
                operationObject.operand = false;

            } else {

                display.val('Infinity');

                operationObject.evaluated = true;

            }

            console.log('test8');

        } else if (operationObject.operationInit == true) {

            display.val(inputNumber);

            console.log('No operand defined.');

        } else if (operationObject.operand == false && operationObject.operations.length > 0) {

            inputNumber = display.val();

            if (currNo !== 'Infinity') {

                if (lastOperation == 'subtractButton') {
                    result = Number(inputNumber) - Number(currNo);
                } else if (lastOperation == 'addButton') {
                    result = Number(inputNumber) + Number(currNo);
                } else if (lastOperation == 'multiplyButton') {
                    result = Number(inputNumber) * Number(currNo);
                } else {
                    result = Number(inputNumber) / Number(currNo);
                }

                display.val(result);

                operationObject.evaluated = true;

            } else {

                display.val('Infinity');

            }

        } else {
            display.val(inputNumber);
        }

    }

    function clearAll() {

        display.val('');

        inputNumber = '';
        result = '';

        operationObject.numbers = [];
        operationObject.operationInit = false;
        operationObject.evaluated = false;
        operationObject.operationContinued = false;
        operationObject.operations = [];
        operationObject.operand = false;

    }
});