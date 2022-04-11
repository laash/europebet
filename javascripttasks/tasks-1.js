//taask 1

//first verison
const numJewelsInStones1 = function (jewels, stones) {
  let j = Array.from(jewels);
  let s = Array.from(stones);
  let count = 0;
  for (index in j) {
    count += s.filter((stone) => stone == j[index]).length;
  }
  return count;
};

//second version
const numJewelsInStones2 = function (jewels, stones) {
  return stones.split("").filter((stone) => jewels.includes(stone)).length;
};

// task 2

//first version
const isValid = function (s) {
  const validBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let openBrackets = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      openBrackets.push(s[i]);
    } else {
      if (openBrackets[openBrackets.length - 1] === validBrackets[s[i]]) {
        openBrackets.pop();
      } else return false;
    }
  }
  return !openBrackets.length;
};
//second version
const isValid1 = function (inputString) {
  while (
    inputString.indexOf("()") !== -1 ||
    inputString.indexOf("{}") !== -1 ||
    inputString.indexOf("[]") !== -1
  ) {
    inputString = inputString
      .replace("()", "")
      .replace("{}", "")
      .replace("[]", "");
  }

  return !inputString.length;
};
