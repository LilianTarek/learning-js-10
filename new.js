// videos from 102-110
// task 1
// let x = prompt("Print Number From – To");
// let y = x.split("-").sort((a, b) =>a-b);
// for (let i = +y[0]; i <= y[1];i++)
// {
//     let num = document.createElement("div");
//     num.textContent = i;
//     document.body.appendChild(num);
// }
// task 2
// let parent=document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");
// let button = document.createElement("button");
// function popup() {
//     h1.textContent = "Welcome"
//     p.textContent = "This is a popup";
//     button.textContent = "x";
//     parent.append(h1,p,button);
//     document.body.appendChild(parent);
//     button.addEventListener("click", function () {
//         button.parentElement.remove();
//      });
// }
// setTimeout(popup,5000);
// task 3,4
// div = document.createElement("div");
// div.textContent = "10";
// document.body.appendChild(div);
// function countdown()
// {
//     div.innerHTML -= 1;
//     if (div.innerHTML=== "0")
//     {
//         location.href =
//           "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/";
//     }
// }
// counter = setInterval(countdown, 500);
// task5
// div = document.createElement("div");
// div.textContent = "10";
// document.body.appendChild(div);
// function countdown()
// {
//     div.innerHTML -= 1;
//     if (div.innerHTML === "5")
//     {
//                window.open(
//                    "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/", "_blank",
//                    "width=500,height=500,top=100,left=900"
//                );
//     }
//     if (div.innerHTML=== "0")
//     {
//         clearInterval(counter);
//     }
// }
// counter = setInterval(countdown, 500);
// videos from 111-114
// task1
// let select = document.getElementById("fonts");
// let colors = document.getElementById("colors");
// div=document.querySelector("div");
//  select.addEventListener("change", function () {
//      window.localStorage.setItem("fonts", select.value);
    
//      div.style.fontFamily = select.value;
//  });
//    div.style.fontFamily = window.localStorage.getItem("fonts");

//  colors.addEventListener("change", function () {
//    window.localStorage.setItem("colors", colors.value);

//    div.style.color = colors.value;
//  });
// div.style.color = window.localStorage.getItem("colors");
//   size.addEventListener("change", function () {
//     window.localStorage.setItem("size",size.value);

//     div.style.fontSize = size.value;
//   });
// div.style.fontSize = window.localStorage.getItem("size");
//   task 2
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// one.oninput = function () {
//     window.sessionStorage.setItem("one", one.value);
// };
// two.oninput = function () {
//   window.sessionStorage.setItem("two", two.value);
// };
// three.oninput = function () {
//   window.sessionStorage.setItem("three", three.value);
// };
// four.onchange = function () {
//   window.sessionStorage.setItem("four", four.value);
// };
// one.value = window.sessionStorage.getItem("one");
// two.value = window.sessionStorage.getItem("two");
// three.value = window.sessionStorage.getItem("three");
// four.value = window.sessionStorage.getItem("four");

// videos from 115-122
// task1
// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// const [a, , , , e] = myNumbers;



// console.log(a * e); // 5

// task 2
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here
// let [a, b, c, [d, e, [f, g]]] = mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
// task3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// // Write Your Destructuring Assignment Here

// const [, a, b, c] = arr3.concat(arr1);

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
// task4
// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// // Write Your Destructuring Assignment Here
// let { age: a, working: w } = member;
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working
// let { country:c } = member;
// console.log(`I Live in ${c}`);
// // I Live in Egypt
// let { hobbies:[h1,,h3] } = member;
// console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
// task 5
// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// // Write Your Destructuring Assignment/s Here
// const { title: t, developer: d,releases} = game;
// const [o, a] = Object.keys(releases);
// const [[u, j],{US: u_price,JAP: j_price },or] = Object.values(releases);

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD
// task6
// let chosen = 2;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] }
// ];

// // Write Your Code Here

// const [x, y, z] = myFriends;
// let {
//   title: tx,
//   age: ax,
//   available: avx,
//   skills: [onex, twox]
// } = x;
// let {
//   title: ty,
//   age: ay,
//   available: avy,
//   skills: [oney, twoy]
// } = y;
// let {
//   title: tz,
//   age: az,
//   available: avz,
//   skills: [onez, twoz]
// } = z;
// avx === true ? avx = "Available" : avx = "Not Available";
// avy === true ? (avy = "Available") : (avy = "Not Available");
// avz === true ? (avz = "Available") : (avz = "Not Available");
// if (chosen === 1) {
//   console.log(tx, ax, avx, twox);
// } else if (chosen === 2) {
//   console.log(ty, ay, avy, twoy);
// } else if (chosen === 3) {
//   console.log(tz, az, avz, twoz);
// }

// If chosen === 1

// ("Osama");
// 39;
// ("Available");
// ("CSS");

// // If chosen === 2

// ("Ahmed");
// 25;
// ("Not Available");
// ("Django");

// // If chosen === 3

// ("Sayed");
// 33;
// ("Available");
// ("Laravel");
// videos from 123-133
// task 1

// let newset = new Set([10]);
// newset.add(20);
// newset.add(newset.size);
// let arrayFromSet = Array.from(newset);
// console.log(arrayFromSet[arrayFromSet.length - 1]);
// task2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// let myFriendsset = new Set(myFriends.sort());
// console.log(myFriendsset);
// task 3
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt"
};
let infomap = new Map(Object.entries(myInfo));
console.log(infomap);
console.log(infomap.size);
console.log(infomap.has("role"));
// task 4
let theNumber = 100020003000;
let num = +[...new Set(theNumber.toString())].sort().join("");

console.log(num);
// task5
let theName = "Elzero";
//theNameres = [...new Set(theName)];
//theNameres = Array.from(theName);
//theNameres = [...theName].slice();
//theNameres = (Object.assign([], theName));
//theNameres = ([...theName]);
//console.log(theNameres);
// Needed Output
//["E", "l", "z", "e", "r", "o"];
// task 6
//let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// chars.sort();
// chars.copyWithin(0, 3,6);
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// chars.sort();
//  chars.copyWithin(0, 4,-1);
// console.log(chars);
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
chars.sort();
chars.copyWithin(0, 5, 7);
chars.copyWithin(4, 2, 5);
chars.copyWithin(1, 0, 2);
chars.copyWithin(0, 2, 3);
   chars.copyWithin(3,1,2);
console.log(chars);
// task 7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// let mergedArray = [...numsOne, ...numsTwo];
//mergedArray = numsOne.concat(numsTwo);
numsOne.push(...numsTwo);
console.log(numsOne);

// task 8
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Number(Math.max(...n1)*[...n1,...n2].length));
