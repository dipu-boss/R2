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
userInput.question("Enter your Offer Link Here = ", (value) => {
  console.log(value);
  fs.writeFile(
    "link.js",
    `const offerLink = "vnd.youtube://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqa2RpMmQ3V3hETFUxdktkekZSTjRnSVh0Umprd3xBQ3Jtc0tuemJ3dlRUTlFpRVZzWUJUVV9aa210ajhFS3RDQ0pkMjB6OU1IeGsxSDRhbTlvSkZDZ3RkNzBnX1J4dGJZVzQxejduYTRaYUFMUVhmT2hqWnQxclBRbEZXcWZBWWcwQ29BamFSeXN5UnBsUDY5UHd1aw&q=${value}&html_redirect=1";`,
    function (err) {
      console.log("Link set seccussful★ Done And past (netlify deploy --prod)");

      process.exit();
    }
  );
  //
  fs.writeFile("./st/link.js", `const offerLink = "${value}";`, function (err) {
    console.log("Link set seccussful.");
    process.exit();
  });
});
