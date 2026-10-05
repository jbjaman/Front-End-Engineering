const user = {
  id: 1,
  name: "Jubayer",
  email: "jubayer@example.com",
};

user.name; // access
user["name"]; // access

// Nested Object -> frontend api response এ nested object খুব common

const user = {
  name: "Jubayer",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

user.address.city;

// Destructuring

const { name, email } = user;

// Array Destructuring

const numbers = [23, 34];
const { first, second } = numbers;

// spread operator

const user = {
  name: "Jubayer",
  age: 25,
};

const updateUser = {
  ...user,
  age: 26,
};

// array spread

const oldUesrs = ["A", "B"];

const newUsers = [...oldUesrs, "C"]; // output: ["A","B","C"]

// Rest Operator -> function arguments collect করতে

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(23, 3, 4, 4); // output: 34
