const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(value) {
  if (typeof (value) === "string" && +value && isFinite(value)) {
    let sampleActivity = +value;

    if (sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY) {
      let k;
      let t;

      k = 0.693 / HALF_LIFE_PERIOD;
      t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;

      return Math.ceil(t);
    }

  }

  return false;
};
