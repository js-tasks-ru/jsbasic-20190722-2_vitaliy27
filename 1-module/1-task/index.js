/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
}

let x = +prompt("Enter: x", '0');
let n = +prompt("Enter: n", "0");

  if (n < 1 ) {
    n = +prompt("Enter: n > 1", "0");
  } else {
    alert( pow(x, n) );
  }
