console.log('Hello');

function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    let expression = display.value
      // g = global search
      .replace(/(\d+)%/g, '*($1*0.01)');

    display.value = eval(expression);
  } catch (event) {
    display.value = 'Error';
  }
}

function calculateCos() {
  let result = Math.cos(eval(display.value));
  display.value = result.toFixed(2);
}

function calculateSin() {
  let result = Math.sin(eval(display.value));
  display.value = result.toFixed(2);
}

function calculateTan() {
  let result = Math.tan(eval(display.value));
  display.value = result.toFixed(2);
}

function calculateCot() {
  let result = 1 / Math.tan(eval(display.value));
  display.value = result.toFixed(2);
}

function calculateSqrt() {
  let result = Math.sqrt(eval(display.value));
  display.value = result.toFixed(2);
}

function calculateSquareRoot() {
  let result = eval(display.value) ** 2;
  display.value = result.toFixed(2);
}
