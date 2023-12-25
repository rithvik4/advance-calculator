let display = document.getElementById('result');
let calculationDisplay = document.getElementById('calculation');
let currentValue = '0';
let calculation = '';

function appendToDisplay(value) {
  if (currentValue === '0') {
    currentValue = value;
  } else {
    currentValue += value;
  }
  display.textContent = currentValue;
  updateCalculationDisplay(value);
}

function updateCalculationDisplay(value) {
  calculation += value;
  calculationDisplay.textContent = calculation;
}

function clearDisplay() {
  currentValue = '0';
  calculation = '';
  display.textContent = currentValue;
  calculationDisplay.textContent = calculation;
}

function deleteLast() {
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
  } else {
    currentValue = '0';
  }
  display.textContent = currentValue;
}

function togglePositiveNegative() {
  if (currentValue.charAt(0) === '-') {
    currentValue = currentValue.slice(1);
  } else {
    currentValue = '-' + currentValue;
  }
  display.textContent = currentValue;
}

function calculateResult() {
  try {
    currentValue = eval(currentValue).toString();
    display.textContent = currentValue;
    calculation = '';
    calculationDisplay.textContent = calculation;
  } catch (error) {
    display.textContent = 'Error';
    currentValue = '0';
  }
}

function calculatePercentage() {
  currentValue = (parseFloat(currentValue) / 100).toString();
  display.textContent = currentValue;
  updateCalculationDisplay('%');
}

function calculateSquareRoot() {
  currentValue = Math.sqrt(parseFloat(currentValue)).toString();
  display.textContent = currentValue;
  updateCalculationDisplay('√');
}
