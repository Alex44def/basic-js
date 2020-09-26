const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const command = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  let newArr = arr.slice();
  let j = 0;

  if (!(Array.isArray(arr))) {
    throw new Error('No array')
  }

  for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case command[0]:  // --discard-next
        if (i < newArr.length - 1 && newArr[i + 1] != undefined) {
          newArr.splice(i, 2, undefined, undefined);
        } else {
          newArr.splice(i, 1, undefined);
        }
        i--;
        break;
      case command[1]: // --discard-prev
        if (i > 0 && newArr[i - 1] != undefined) {
          newArr.splice((i - 1), 2, undefined, undefined);
        } else {
          newArr.splice(i, 1, undefined);
        }
        break;
      case command[2]: // --double-next
        if (i < newArr.length - 1 && newArr[i + 1] != undefined) {
          newArr.splice(i, 1, newArr[i + 1]);
        } else {
          newArr.splice(i, 1, undefined);
        }
        break;
      case command[3]: // --double-prev
        if (i > 0 && newArr[i - 1] != undefined) {
          newArr.splice(i, 1, newArr[i - 1]);
        } else {
          newArr.splice(i, 1, undefined);
        }
        break;
    }
  }

  for (let j = 0; j < newArr.length; j++) { 
    if (newArr[j] === undefined) {
      newArr.splice(j, 1);
      j--;
    }
  }
  return newArr;
};
