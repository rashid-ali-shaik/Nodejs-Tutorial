//streams :- converts the big file files to small chunks

const { createReadStream, writeFileSync } = require("fs");

const streams = createReadStream("./content/big.txt", {
  highWaterMark: 120000,
  encoding: "utf-8",
});
streams.on("data", (res) => {
  console.log(res);
});

// highWaterMark :- sets the chunk size
// encoding : reads the file
