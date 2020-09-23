const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  // for (let i = 0; i < matrix.length; i++) {
  //   let array = matrix[i];
  //   for (let j = 0; j < array.length; j++) {
  //     if (array[j] === '^^') {
  //       count = count + 1;
  //     }
  //   }
  // }
  matrix.forEach(elem => {
    elem.forEach(e => {
      if (e === '^^') {
        count = count + 1;
      }
    });
  });

  return count;
};
