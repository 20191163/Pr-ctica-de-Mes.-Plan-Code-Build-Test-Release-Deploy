let displayValue = '';

function appendToDisplay(value) {
    if (displayValue === 'Error') {
        displayValue = ''; // Reiniciar si se mostró un error previamente
    }
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        if (displayValue.includes('/0')) {
            throw new Error('División por cero');
        }
        const result = eval(displayValue);
        displayValue = result;
        document.getElementById('display').value = result;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = 'Error';
    }
}
