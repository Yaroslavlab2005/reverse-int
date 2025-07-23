function reverse(n) {
  return parseInt(n.toString().split('').reverse().join(''), 10);
}

module.exports = reverse;
