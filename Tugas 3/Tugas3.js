const divideAndSort = (num) => {
  if (typeof num === "number") {
    let count = num
      .toString()
      .split("0")
      .map((el) => el.split("").sort().join(""))
      .join("");
    return console.log(parseInt(count));
  } else {
    return console.log("Only numbers can be input");
  }
};

// divideAndSort(5956560159466056);
// divideAndSort("5956560159466056");
