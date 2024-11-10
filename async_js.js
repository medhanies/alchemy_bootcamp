const fetch = require("node-fetch");
const fs = require("fs");

//setTimeout
setTimeout(() => {
  console.log("Waited 1 second");
}, 1000);

//nested settimeouts
// setTimeout(() => {
//   console.log("3");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("1");
//     }, 1000);
//   }, 1000);
// }, 1000);

//error first callback
fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error("ERROR");
    console.error(err);
  } else {
    console.error("GOT DATA");
    console.log(data);
  }
});
