console.log('sanity check');
var regDisplay = "";
console.log("hello",calculatorModule());
var myCalculator = calculatorModule();
console.log("purple",myCalculator);


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

var button7 = document.getElementById('7');
button7.addEventListener('click', function(){
    refreshDisplay(7);
  });

var button8 = document.getElementById('8');
button8.addEventListener('click', function(){
    refreshDisplay(8);
  });

var button9 = document.getElementById('9');
button9.addEventListener('click', function(){
    refreshDisplay(9);
  });


var button4 = document.getElementById('4');
button4.addEventListener('click', function(){
    refreshDisplay(4);
  });

var button5 = document.getElementById('5');
button5.addEventListener('click', function(){
    refreshDisplay(5);
  });

var button6 = document.getElementById('6');
button6.addEventListener('click', function(){
    refreshDisplay(6);
  });

var button1 = document.getElementById('1');
button1.addEventListener('click', function(){
    refreshDisplay(1);
  });

var button2 = document.getElementById('2');
button2.addEventListener('click', function(){
    refreshDisplay(2);
  });

var button3 = document.getElementById('3');
button3.addEventListener('click', function(){
    refreshDisplay(3);
  });

var button0 = document.getElementById('0');
button0.addEventListener('click', function(){
    refreshDisplay(0);
  });

var button00 = document.getElementById('00');
button00.addEventListener('click', function(){
    refreshDisplay('00');
  });
var buttonperiod = document.getElementById('period');
buttonperiod.addEventListener('click', function(){
    refreshDisplay(".");
  });

var addNumbers = document.getElementById('add');
addNumbers.addEventListener('click',
  function(){
    var total = document.getElementById('display').innerHTML;
    console.log("coffee", total);
    myCalculator.add(parseFloat(total));
    clearDisplay("");
    console.log(myCalculator);
  });

var subNumbers = document.getElementById('subtract');
  subNumbers.addEventListener('click',
  function(){
    var total = document.getElementById('display').innerHTML;
    console.log('water', total);
    myCalculator.subtract(parseFloat(total));
    clearDisplay("");
    console.log(myCalculator);
  });

var timesNumbers = document.getElementById('multiply');
console.log("please", timesNumbers);
  timesNumbers.addEventListener('click',
  function(){
    var total = document.getElementById('display').innerHTML;
    console.log('cookie', total);
    myCalculator.multiply(parseFloat(total));
    clearDisplay("");
    console.log(myCalculator);
  });


var equalButton = document.getElementById('equals');
console.log(equalButton);
equalButton.addEventListener('click', function(){
  clearDisplay("");
   //myCalculator.getTotal();
   console.log("total", total);
   refreshDisplay(parseFloat(total));


});
