// Implementasi dengan fungsi
const palindromeCheck = (str) => {
  let setStr = "";
  let x = str.length - 1;
  if (typeof str !== "string") {
    return console.log("Teks harus berupa string");
  } else if (str === " " || str === "") {
    return console.log("Input tidak boleh Kosong");
  } else {
    while (x >= 0) {
      setStr += str[x];
      x--;
    }
    console.log(setStr);
    if (str === setStr) {
      console.log(`${str} adalah palindrome`);
    } else {
      console.log(`${str} bukan palindrome`);
    }
  }
};
palindromeCheck("siang");

// dibuatkan sebuah fungsi
// menetukan LowerCase

//Tidak implementasi fungsi

// const str = "hari";
// let setStr = "";
// let x = str.length - 1;
// if (typeof str !== "string") {
//   return console.log("Teks harus berupa string");
// } else if (str === " " || str === "") {
//   return console.log("Input tidak boleh Kosong");
// } else {
//   for (x; x >= 0; x--) {
//     setStr += str[x];
//   }
//   console.log(setStr);
//   if (str === setStr) {
//     console.log(`${str} adalah palindrome`);
//   } else {
//     console.log(`${str} bukan palindrome`);
//   }
// }
