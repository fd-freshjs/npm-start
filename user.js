const { mathSum } = require("./functions");

const user = {
  name: 'Vanya',
  age: mathSum(3, 3),
}

module.exports = user;

/* 
function exports(imports) {
  const user = {
    name: 'Vanya',
    age: imports.mathSum(3, 3),
  }

  return user;
} */
