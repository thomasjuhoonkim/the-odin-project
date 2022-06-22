function min(a, b) {
  return a <= b ? a : b;
}

function pow(x, n) {
  if (x === undefined || isNaN(x) || n === undefined || isNaN(n)) {
    return undefined;
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => {
//     alert("You agreed.");
//   },
//   () => {
//     alert("You cancelled the execution.");
//   }
// );

function add7(a) {
  return a + 7;
}

function multiply(a, b) {
  return a * b;
}

function capitalize(string) {
  return string[0].toUpperCase() + string.substring(1);
}

function lastLetter(string) {
  string = String(string);
  return string.substring(string.length - 1);
}
