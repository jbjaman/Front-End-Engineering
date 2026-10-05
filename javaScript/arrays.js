const users = [
  {
    id: 1,
    name: "Jubayer",
    active: true,
  },
  {
    id: 2,
    name: "Rahim",
    active: false,
  },
  {
    id: 3,
    name: "Karim",
    active: true,
  },
];

// map() -> array এর প্রতিটি element transform করবে. map() নতুন array return করে

const names = users.map((user) => console.log(user.name));

// filter() -> conditions অনুযায়ী elements বের করতে. all matching element

const activeUsers = users.filter((user) => user.active); // Jubayer, Karim

// find() -> একটা matching element খুঁজতে. first matching element

const user = users.find((user) => user.id === 2); // Rahim

// some() -> কমপক্ষে একজন condition satisfy করে কিনা

const hasInactiveUser = users.some((user) => !user.active); // true

// every() -> সবগুলোও condition satisfy করে কিনা

const allActive = users.every((user) => user.active); // false

// includes() -> কোনো value আছে কিনা

const roles = ["admin", "user"];

roles.includes("admin"); // output: true

// reduce() -> array থেকে একটা ফাইনাল value তৈরী করতে

const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0); // output : 600

// sort() -> default sorting string comparison এর ভিত্তিতে হয়. sort() original array mutate করে

const numbersSort = [2, 76, 4];

numbersSort.sort((a, b) => a - b); //
numbersSort.sort((a, b) => b - a); // descending
