const fetch = require("node-fetch");
const fs = require("fs");
const { error } = require("console");

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
// fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.error("ERROR");
//     console.error(err);
//   } else {
//     console.error("GOT DATA");
//     console.log(data);
//   }
// });

//create a promise
// const myPromise = new Promise((resolve, reject) => {
//   const rand = Math.floor(Math.random() * 2);
//   if (rand == 0) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// myPromise
//   .then(() => console.log("Success"))
//   .catch(() => console.error("Something went wrong"));

// //fs readFile with promises
// fs.promises
//   .readFile("test.txt", { encoding: "utf-8" })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//fetch with promises
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//*****Async/await********

// //load file with async/await
// const loadFile = async () => {
//   try {
//     const data = await fs.promises.readFile("test.txt", {
//       encoding: "utf-8",
//     });
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// loadFile();

//fetch pokemon with async/await without error handling
const fetchPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
fetchPokemon(20);
