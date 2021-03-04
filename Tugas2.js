const str = "Saya belajar javascript";
const arr = [];
let count = 0;
let setStr = "";
if (typeof str === "string") {
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i >= str.length) {
      arr[count] = setStr;
      setStr = "";
      count++;
      console.log(arr);
      if (i >= str.length) {
        let result = "";
        for (let j = arr.length - 1; j >= 0; j--) {
          result += arr[j];
          if (j !== 0) {
            result += " ";
          } else {
            console.log(result);
          }
        }
      }
    } else {
      setStr += str[i];
      // console.log(setStr);
    }
  }
} else {
  console.log("Only string can be Input");
}
