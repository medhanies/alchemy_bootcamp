// const myName = "Medhanie";

// const message = `Hello, ${myName}!`;

// console.log(message);

// const message = `Hello, ${process.argv}!`;

// console.log(message);

// const message = `Hello, ${process.argv[2]}!`;

// console.log(message);

const { faker } = require("@faker-js/faker");
const name = faker.person.fullName();
const message = `Hello, ${name}!`;
console.log(message);
