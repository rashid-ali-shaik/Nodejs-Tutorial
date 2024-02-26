const { readFile } = require("fs").promises;

// const util = require("util");
// const readFliePromise = util.promisify(readFile);

// const readPath = (path) => {
//   return new Promise((res, rej) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         rej(err);
//       } else {
//         res(data);
//       }
//     });
//   });
// };

const waitTillGet = async () => {
  const first = await readFile("./content/first.txt", "utf-8");
  const second = await readFile("./content/second.txt", "utf-8");
  console.log(first, second);
};

waitTillGet();
console.log("next task");
