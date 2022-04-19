const functions = require('./functions');
const os = require('os');

/* 
  1) .js
  2) .json (parse string to obj)
*/

/* 
  1) если первый импорт файла за все время
    то запустить файл и запомнить результат экспорта
  2) если второй и полед то отдать сохраненный экспорт после первого запуска
*/

console.log(os.version());
// console.log(process.env);
// console.log(module);
// console.log(global);
