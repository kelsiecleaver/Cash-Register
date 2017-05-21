console.log('sanity check');
var regDisplay = "";
var myCalculator = calculatorModule();


var mainDisplay = document.getElementById('display');
mainDisplay.innerHTML = regDisplay;

function refreshDisplay(content){
  var calculatorDisplay = document.getElementById('display');
  calculatorDisplay.innerHTML = calculatorDisplay.innerHTML + content;
}
var button7 = document.getElementById('7');

button7.addEventListener('click', function(){
  console.log('anything');
 refreshDisplay(7);

});


