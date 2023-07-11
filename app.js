//function greetings

// function greet() {
//   console.log("Hello Baby");
// }
// greet();

// (function (lastname) {
//   var firstname = "Michael";
//   console.log(firstname);
//   console.log(lastname);

//   console.log(`${firstname} ${lastname}`);
//   console.log(`Hello, ${babyGirl}`);
// })("Kings");

// var buffer = new ArrayBuffer(8);

// function testEqual(val) {
//   if (val == 12) {
//     // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }
// console.log(testEqual(val));
// // testEqual(10);

// function testEqual() {
//   3 === 3;
//   3 == "3";

//   console.log(testEqual);
// }

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  // Only change code above this line
}

var data = lookUpProfile("Akira", "likes");
console.log(data);
