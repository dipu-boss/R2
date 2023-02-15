const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Dipu Ahmed  To Any Update Whatsapp 01312701392     ");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);

  //
  fs.writeFile("title.js", `const pageTitle = "${value}";`, function (err) {
    console.log("Link set seccussful.");
    process.exit();
  });
});
