/*
 * Implement all your JavaScript in this file!
 */
$(window).on('load', function() {
    console.log('The document is loaded!');
    var display = $('#display'),
        inputNumber = '',
        inputNumbers = [],
        evaluated = false,
        evaluatedContinue = false,
        newOperand = false,
        operation = '',
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
        //newOperand: true,
        evaluated: false,
        operationContinued: false,
        operation: '',
        operations: []
    };

    function inputHandler() {
        if (operationObject.evaluated == true) {

            operationObject.numbers = [];
            operationObject.operations = [];

            display.val('');
            display.val(display.val() + $(this).val());

            //operationObject.newOperand = false;
            //operationObject.operationNew = false;
            operationObject.evaluated = false;

        } else if (operationObject.operationInit == true) {

            display.val('');
            display.val(display.val() + $(this).val());
            operationObject.operationInit = false;

        } else {
            display.val(display.val() + $(this).val());
            console.log('else');
        }

    }

    function operationHandler() {
        inputNumber = display.val();
        operation = $(this).attr('id');

        if (inputNumber != '') {

            operationObject.numbers.push(Number(inputNumber));

            if (operationObject.evaluated == true) {
                console.log('test1');

                operationObject.operations.push(operation);

                operationObject.evaluated = false;
                operationObject.operationInit = true;



            } else if (operationObject.evaluated == false && operationObject.operations.length > 0) {
                console.log('test2');


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

                operationObject.operationInit = true;

            } else {
                console.log('test3');
                operationObject.operations.push(operation);
                if ($(this).attr('id') == 'subtractButton') {
                    operationObject.operation = 'subtract';
                } else if ($(this).attr('id') == 'addButton') {
                    operationObject.operation = 'addition';
                } else if ($(this).attr('id') == 'multiplyButton') {
                    operationObject.operation = 'multiplication';
                } else {
                    operationObject.operation = 'division';
                }
                operationObject.operationInit = true;
                console.log('else');
            }

            console.log(operationObject);

        } else {
            console.log('No numbers entered!');
        }
    }

    function evaluate() {

        if (operationObject.operations.length > 0) {
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
            } else {
                display.val('Infinity');
                operationObject.evaluated = true;
            }
            console.log(operationObject);
        } else {
            console.log('No operations defined.');
        }

    }

    function clearAll() {
        inputNumber = '';
        operationObject.inputNumbers = [];
        result = '';
        display.val('');
        operationObject.operationInit = false;
        console.log('clearAll');
        console.log(operationObject.inputNumbers);
    }
});