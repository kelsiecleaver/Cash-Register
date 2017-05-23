console.log('sanity check');
var myCalculator = calculatorModule();
var operator = null;
var regDisplay = "";
var saveNum = 0;

var mainDisplay = document.getElementById('display');
mainDisplay.innerHTML = regDisplay;

function refreshDisplay(content){
  var calculatorDisplay = document.getElementById('display');
  calculatorDisplay.innerHTML = calculatorDisplay.innerHTML + content;
}

function clearDisplay(number){
  var calculatorDisplay = document.getElementById('display');
  calculatorDisplay.innerHTML = number;
}

// Show numbers in display
var button7 = document.getElementById('seven');
button7.addEventListener('click', function(){
    refreshDisplay(7);
  });

var button8 = document.getElementById('eight');
button8.addEventListener('click', function(){
    refreshDisplay(8);
  });

var button9 = document.getElementById('nine');
button9.addEventListener('click', function(){
    refreshDisplay(9);
  });

var button4 = document.getElementById('four');
button4.addEventListener('click', function(){
    refreshDisplay(4);
  });

var button5 = document.getElementById('five');
button5.addEventListener('click', function(){
    refreshDisplay(5);
  });

var button6 = document.getElementById('six');
button6.addEventListener('click', function(){
    refreshDisplay(6);
  });

var button1 = document.getElementById('one');
button1.addEventListener('click', function(){
    refreshDisplay(1);
  });

var button2 = document.getElementById('two');
button2.addEventListener('click', function(){
    refreshDisplay(2);
  });

var button3 = document.getElementById('three');
button3.addEventListener('click', function(){
    refreshDisplay(3);
  });

var button0 = document.getElementById('zero');
button0.addEventListener('click', function(){
    refreshDisplay(0);
  });

var button00 = document.getElementById('doubleZero');
button00.addEventListener('click', function(){
    refreshDisplay("00");
  });

var buttonDecimal = document.getElementById('decimal');
buttonDecimal.addEventListener('click', function(){
    refreshDisplay(".");
  });


// Add function
var addNumbers = document.getElementById('add');
  addNumbers.addEventListener('click', function(){
    saveNum = parseFloat(mainDisplay.innerHTML);
    myCalculator.load(saveNum);
    operator = 'add';
    clearDisplay('');
  });

// Subtract function
var subtractNumbers = document.getElementById('subtract');
  subtractNumbers.addEventListener('click', function(){
    saveNum = parseFloat(mainDisplay.innerHTML);
    myCalculator.load(saveNum);
    operator = 'subtract';
    clearDisplay('');
  });

// Multiply function
var multiplyNumbers = document.getElementById('multiply');
  multiplyNumbers.addEventListener('click', function(){
    saveNum = parseFloat(mainDisplay.innerHTML);
    myCalculator.load(saveNum);
    operator = 'multiply';
    clearDisplay('');
  });

// Divide function
var divideNumbers = document.getElementById('divide');
  divideNumbers.addEventListener('click', function(){
    saveNum = parseFloat(mainDisplay.innerHTML);
    myCalculator.load(saveNum);
    operator = 'divide';
    clearDisplay('');
  });

// Equal/Choose function
var equalButton = document.getElementById('equal');
equalButton.addEventListener('click', function(){
  saveNum = parseFloat(mainDisplay.innerHTML);
  switch(operator){
    case 'add':
      myCalculator.add(saveNum);
    break;
    case 'subtract':
      myCalculator.subtract(saveNum);
    break;
    case 'multiply':
      myCalculator.multiply(saveNum);
    break;
    case 'divide':
      myCalculator.divide(saveNum);

  }
  // Show Total with two decimal places
  mainDisplay.innerHTML = myCalculator.getTotal().toFixed(2);
});

// Clear function/button
var clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', function(){
    myCalculator.clearMemory();
    clearDisplay('');
  });
