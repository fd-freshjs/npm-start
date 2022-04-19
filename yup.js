const yup = require('yup');

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
});

const result = schema.isValidSync({ name: 'Viktor', age: 5 });

console.log(result);