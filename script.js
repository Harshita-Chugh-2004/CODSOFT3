
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operatorUsed = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');

        if (!isNaN(action) || action === '.' || action === '00') {
            currentInput += action;
            display.value = currentInput;
            operatorUsed = false;  

        } else if (action === 'clear') {
            currentInput = '';
            display.value = '';
            operatorUsed = false;

        } else if (action === 'delete') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;

        } else if (action === '=') {
            try {
                if (currentInput) {
                    currentInput = eval(currentInput).toString(); 
                    display.value = currentInput;
                    operatorUsed = false; 
                }
            } catch {
                display.value = 'Error';
                currentInput = '';
            }

        } else {
            if (currentInput && !operatorUsed) {
                currentInput += action; 
                display.value = currentInput;
                operatorUsed = true;  
            }
        }
    });
});
