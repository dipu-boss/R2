const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Dipu Ahmed To Any Update Whatsapp 01312701392");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your Offer Link With out https:// = ", (value) => {
  console.log(value);
  fs.writeFile(
    "link.js",
    `const offerLink = "vnd.youtube://${value}&html_redirect=1";`,
    function (err) {
      console.log("Link set seccussful Done");

      process.exit();
    }
  );
  //
  fs.writeFile("./st/link.js", `const offerLink = "${value}";`, function (err) {
    console.log("Link Add seccussful.");
    process.exit();
  });
});