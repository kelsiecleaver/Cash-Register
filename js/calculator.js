function calculatorModule(){
  var memory = 0;
  var total = 0;
  var calculator = {};

  function load(x){
    if(typeof x === "number"){
      total = x;
      return total;
    }
  }

  function getTotal(){
    return total;
  }

  function add(x){
    total += x;
  }

  function subtract(x){
    total -= x;
  }

  function multiply(x){
    total *= x;
  }

  function divide(x){
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
};
