const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let name = '';
  if (!Array.isArray(array)) {
    return false;
  }
  array.forEach(element => {
    if (typeof (element) === "string") {
      name = name + element.trim().toUpperCase().slice(0, 1);
    }
  });
  if (name === "") {
    return false;
  }
  name = name.split('').sort().join('');
  return name;
};
