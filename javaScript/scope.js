// Scope -> কোন জায়গা থেকে একটা ভ্যারিয়েবল এক্সেস করা যাবে

// Global Scope

const name = "Rahim";

function callName() {
  console.log(name); // function এর ভিতর থেকে name access করা যাচ্ছে
}

// Function Scope

function test() {
  const age = 25; // function block এর ভিতরে
}

console.log(age); // output: error

// Block Scope

if (true) {
  let name = "Narine"; // let, const block scoped
}

console.log(name); // output: error
