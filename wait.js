let wait = function (milliseconds) {
  return new Promise((resolve) => {
    if (typeof milliseconds !== 'number') {
      throw new Error('milliseconds not a number');
    }
    setTimeout(() => resolve("done!"), milliseconds)
  });
};

let myecho = function () {
    return 'test result 1';
}
module.exports = myecho;
