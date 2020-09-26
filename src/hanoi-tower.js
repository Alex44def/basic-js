const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const secPerHour = 3600;
  let turns = 0;
  let seconds = 0;

  turns = 2 ** disksNumber - 1;
  seconds = Math.floor((turns / turnsSpeed) * secPerHour)

  return {
    turns: turns, 
    seconds: seconds
  };
};
