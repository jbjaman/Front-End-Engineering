// Optional Chaining -> nested data এর ক্ষেত্রে খুব useful

user.address?.city;

// Nullish Coalescing

const name = user.name ?? "Unknown"; // name যদি null ওথোবা undefined হয়ে তাহলে "unknown" হবে

// Promise -> API programming এর Foundation

// async/await -> promise handle করার readable way with error handling

async function getUsers() {
  try {
    const response = await fetch("/api/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// fetch() HTTP 404/500 পেলেই automatically catch-এ যায় না। সাধারণত status check করতে হয়

if (!response.ok) {
  throw new Error("Request failed");
}
