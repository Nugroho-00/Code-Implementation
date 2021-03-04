// Implementasi dengan Fungsi
const reverseWord = (str) => {
  const arr = [];
  let count = 0;
  let setStr = "";
  if (typeof str === "string") {
    for (let i = 0; i <= str.length; i++) {
      if (str[i] === " " || i >= str.length) {
        arr[count] = setStr;
        setStr = "";
        count++;
        if (i >= str.length) {
          let result = "";
          for (let j = arr.length - 1; j >= 0; j--) {
            result += arr[j];
            if (j !== 0) {
              result += " ";
            } else {
              return console.log(result);
            }
          }
        }
      } else {
        setStr += str[i];
      }
    }
  } else {
    return console.log("Only string can be Input");
  }
};
reverseWord("Saya belajar javascript");

// Tidak Menggunakan fungsi

// const str = "Saya belajar javascript";
// const arr = [];
// let count = 0;
// let setStr = "";
// if (typeof str === "string") {
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] === " " || i >= str.length) {
//       arr[count] = setStr;
//       setStr = "";
//       count++;
//       if (i >= str.length) {
//         let result = "";
//         for (let j = arr.length - 1; j >= 0; j--) {
//           result += arr[j];
//           if (j !== 0) {
//             result += " ";
//           } else {
//             console.log(result);
//           }
//         }
//       }
//     } else {
//       setStr += str[i];
//     }
//   }
// } else {
//   console.log("Only string can be Input");
// }

// Dibuatkan sebuah Fungsi
// Lebih flexible
