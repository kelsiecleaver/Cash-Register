function calculatorModule(){
  var memory = 0;
  var total = 0;
  var calculator = {};

function load (x){
  if(typeof num === "number"){
    total = num;
    return total;

  }
  function getTotal(x){
    return total;
  }
  function add(x){
    num(x);
    total += x;
  }
  function subtract(x){
    num(x);
    total -= x;
  }
  function multiply(x){
    num(x);
    total *= x;
  }
  function divide(x){
    num(x);
    total /= x;
  }
  function recallMemory(){
    return memory;
  }
  function saveMemory(){
    memory = total;
  }
  function clearMemory(){
    memory = 0;
  }
return{
  load: load,
  getTotal: getTotal,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  recallMemory: recallMemory,
  saveMemory: saveMemory,
  clearMemory: clearMemory,
};
}

}