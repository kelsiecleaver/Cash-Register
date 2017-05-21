function calculatorModule(){
  var memory = 0;
  var total = 0;
  var calculator = {};

  function load (x){
    if(typeof num === "number"){
      total = num;
      return total;
    }
  }

  function getTotal(x){
   console.log("getTotal", total);
    return total;
  }
  function add(x){
    console.log("adding..", x);
    total += x;
  console.log("total is now", total);
  }
  function subtract(x){
console.log('subbbbb', x);
    total -= x;
    console.log('exact total', total);
  }
  function multiply(x){

    total *= x;
    console.log('example', total);
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
}

