// let -> ভ্যালু পরে পরিবর্তন করা যায়

let age = 25;

age = 26;

console.log(age); // Output: 26

// const -> ভ্যারিয়েবল কে reassingment করা যাবেনা

const name = "Rahim";

// name = "Karim"; // Output: error

// তবে এইটা ভ্যালিড

const user = {
  name: "Joshim",
};

user.name = "Mohsin"; // কারণ এখানে অবজেক্ট এর প্রপার্টি পরিবর্তন হয়েছে

console.log(user.name); // output: Mohsin

// var -> পুরোনো জাভাস্ক্রিপ্ট এর ভ্যালিড ডিক্লারেশন
