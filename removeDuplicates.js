function removeDuplicates(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => {
      // TODO: reduce logic
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
      }
      return accumulator;
    },
    [] /* TODO: add initial value */
  );
}

const numbers = [1, 4, 3, 4, 5, 4, 6, 6, 2];
console.log(removeDuplicates(numbers));
