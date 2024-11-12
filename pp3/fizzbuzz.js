function fizzBuzz(numbers) {
  let string = "";
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      string += "fizz";
    }
    if (numbers[i] % 5 === 0) {
      string += "buzz";
    }
  }
  return string;
}

console.log(fizzBuzz([15, 76, 59, 40, 66, 33, 150]));
