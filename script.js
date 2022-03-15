// Funksiyaga oid masalalar

//funcSimple 1

// function PowerA3(a) {
//   return a ** 3;
// }
// console.log(PowerA3(2));

// funcSimple 2

// function PowerA234(a) {

// }
// console.log(PowerA234(2));

// const array = [1, 2, 3, 4, 6];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);

// let s = Number(8);
// function check(s) {
//   let a = s.split("");
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   if (s % sum == 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }

// check(87);

// var binary = "10010010";
// var decimal = parseInt(binary, 2);
// alert(decimal);

let c = "2.5px";
let b = Number.parseInt(c);
console.log(b);

let a = Number.parseFloat(c);
console.log(a);

let d = Number.isNaN(parseFloat(+"100a"));
console.log(d);

let n = Number.isFinite(b);
console.log(n);

let i = Number.isInteger(4 / 0);
console.log(i);
let p = 2.5;
console.log(typeof p);

let f = 2.24555;
f = f.toFixed(2);
console.log(f);

let m = Math.min(7, 48, 87, 55, 12); // let m = Math.min(...arr)
console.log(m);

let e = Math.max("a", "n", "w");
console.log(e);

let r = Math.trunc(Math.random() * 200) - 100;
console.log(r);

let arr = [990091995, 990780252, 58528582, 56333546, 63533];

// let first = +prompt("first number");
// let second = +prompt("second number");

// let opwi = Math.trunc(Math.random() * (second - first) + first);
// console.log(opwi);

console.log(Math.round(1.89)); //2
console.log(Math.trunc(-1.54668)); // -1
console.log(Math.floor(-1.84668)); // -2
console.log(Math.ceil(1.84668)); // 2

document.querySelector("button").addEventListener("click", function () {
  document.querySelector("h2").style.color = "red";
});

let kiriw = +prompt("kirit");

let str = "";

if (kiriw !== 100) {
  switch (Math.floor(kiriw / 100) % 10) {
    case 1:
      str += "bir";
      break;
    case 2:
      str += "ikki";
      break;
    case 3:
      str += "uch";
      break;
    case 4:
      str += "turt";
      break;
    case 5:
      str += "bew";
      break;
    case 6:
      str += "olti";
      break;
    case 7:
      str += "yetti";
      break;
    case 8:
      str += "sakkiz";
      break;
    case 9:
      str += "tuqqiz";
      break;
  }
}
if (kiriw >= 100 && Math.floor(kiriw / 100) % 10) {
  str += "yuz";
}
if (kiriw !== 10) {
  switch (Math.floor(kiriw / 10) % 10) {
    case 1:
      str += "on";
      break;
    case 2:
      str += "yigirma";
      break;
    case 3:
      str += "uttiz";
      break;
    case 4:
      str += "qirq";
      break;
    case 5:
      str += "ellik";
      break;
    case 6:
      str += "oltmiw";
      break;
    case 7:
      str += "yetmiw";
      break;
    case 8:
      str += "sakson";
      break;
    case 9:
      str += "tuqson";
      break;
  }
}
if (kiriw !== 10) {
  switch (Math.floor(kiriw) % 10) {
    case 1:
      str += "bir";
      break;
    case 2:
      str += "ikki";
      break;
    case 3:
      str += "uch";
      break;
    case 4:
      str += "turt";
      break;
    case 5:
      str += "bew";
      break;
    case 6:
      str += "olti";
      break;
    case 7:
      str += "yetti";
      break;
    case 8:
      str += "sakkiz";
      break;
    case 9:
      str += "tuqqiz";
      break;
  }
}

// if (kiriw >= 10 && Math.floor(kiriw / 10) % 10) {
//   str += "on";
// }
alert(str);
