const { readFile, writeFile } = require("fs");

// call back hell

/* readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  let first = res;

  readFile("./content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    let second = res;

    writeFile(
      "./content/result-async.txt",
      `result is : ${first} and ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res);
      }
    );
  });
});
 */
