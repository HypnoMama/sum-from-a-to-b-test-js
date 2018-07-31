
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN){
    return toN;
  } else {
    return fromN + sum(fromN + 1, toN)
  }
}

module.exports = sum;

// from: 5 to: 10

// should be 45

