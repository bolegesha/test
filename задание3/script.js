function formatNumber(number) {
    if (number === '') return '';

    let parts = number.split('.');
    let integerPart = parts[0].replace(/\D/g, '');
    let decimalPart = parts[1] ? parts[1].slice(0, 2) : '';

    let formattedNumber = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    if (decimalPart) {
        formattedNumber += '.' + decimalPart;
    }

    return formattedNumber;
}

function getNumberFromFormatted(formatted) {
    return parseFloat(formatted.replace(/ /g, ''));
}

function formatAndSum(input) {
    let inputs = [document.getElementById('input1'), document.getElementById('input2'), document.getElementById('input3'), document.getElementById('input4')];
    let sumInput = document.getElementById('sum');
    let sum = 0;

    inputs.forEach(inp => {
        let formattedValue = formatNumber(inp.value);
        inp.value = formattedValue;

        let numericValue = getNumberFromFormatted(formattedValue);
        if (!isNaN(numericValue)) {
            sum += numericValue;
        }
    });

    sumInput.value = formatNumber(sum.toFixed(2).toString());
}

function addPlaceholder(input) {
    if (input.value === '') {
        input.placeholder = '0.00';
    }
}

function removePlaceholder(input) {
    if (input.value === '') {
        input.placeholder = '';
    }
}
