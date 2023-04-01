const functions = require('./index');

const testFunction = (FunctionName, scenary, ExpectedValue, ReturnedValue) => {
  if (ExpectedValue === ReturnedValue) {
    console.log(`Teste da função ${FunctionName}: cenário ${scenary} aprovado.`);
  } else {
    console.log(`Teste da função ${FunctionName}: cenário ${scenary} reprovado.`);
  }
};

testFunction('Multiplicação', 1, 25, functions.multiply(5, 5));
testFunction('Multiplicação', 2, 20, functions.multiply(4, 5));
testFunction('Divisão', 1, 10, functions.divide(20, 2));
testFunction('Divisão', 2, 20, functions.divide(40, 2));
