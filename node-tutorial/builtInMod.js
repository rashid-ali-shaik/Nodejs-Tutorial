const os = require("os");
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");
// const user = os.userInfo();
// console.log(user);

// const currentOs = {
//   type: os.type(),
//   release: os.release(),
// };
// console.log(currentOs);

/* console.log(path.sep);
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log(absolutePath); */

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync("./content/result.txt", `result : ${first} and ${second}`, {
  flag: "a",
});
