const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const season = ['winter', 'spring', 'summer', 'autumn'];

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  const testDate = new Date();
  if (!(date instanceof Date)) {
    throw new Error('first error');
  }
  if (date.getTime() === testDate.getTime()) {
    throw new Error("second error");
  }

  
  let mounth = date.getMonth();

  if (mounth === 11 || mounth === 0 || mounth === 1) {
    return season[0];
  } else {
    if (mounth === 2 || mounth === 3 || mounth === 4) {
      return season[1];
    } else {
      if (mounth === 5 || mounth === 6 || mounth === 7) {
        return season[2];
      } else {
        return season[3];
      }
    }
  }
};
