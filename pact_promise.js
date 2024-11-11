// var promise = new Promise(function (resolve, reject) {
//   // asynchronously resolve a value
//   setTimeout(() => {
//     resolve(42);
//   }, 100);
// });

// promise.then((value) => {
//   console.log(value); // 42
// });

let pact = new Pact((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
})
  .then((val) => {
    console.log(val); // 42;
    return val * 2;
  })
  .then((val) => {
    console.log(val); // 84;
  });
